// Wait for Firebase to be available
if (typeof firebase === "undefined") {
  console.error(
    "❌ Firebase is not loaded. Please check script loading order."
  );
}

// Firebase v8 configuration - matching the loaded scripts
const appSettings = {
  apiKey: "AIzaSyBm2ONFKe7IncyD51W7Lzvbn0i1Ut7UKeg",
  authDomain: "portfolio-bb897.firebaseapp.com",
  databaseURL:
    "https://portfolio-bb897-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "portfolio-bb897",
  storageBucket: "portfolio-bb897.appspot.com",
  messagingSenderId: "458634796365",
  appId: "1:458634796365:web:b06870d9416d26750e2b04",
};

// Initialize Firebase with error handling
let database = null;

function initializeFirebase() {
  console.log("🔄 Initializing Firebase...");
  try {
    // Check if Firebase is already initialized
    if (!firebase.apps.length) {
      firebase.initializeApp(appSettings);
      console.log("✅ Firebase initialized successfully");
    } else {
      console.log("✅ Firebase already initialized");
    }

    console.log("🔄 Connecting to Firebase Database...");
    database = firebase.database();
    console.log("✅ Firebase Database connected successfully");
    return true;
  } catch (error) {
    console.error("❌ Firebase initialization failed:", error);
    return false;
  }
}

// Form validation
function validateForm() {
  console.log("🔍 Validating form data...");

  const name = document.getElementById("ip-name").value.trim();
  const email = document.getElementById("ip-mail").value.trim();
  const subject = document.getElementById("ip-subject").value.trim();
  const message = document.getElementById("ip-msg").value.trim();

  console.log("📝 Form data:", { name, email, subject, message });

  if (!name || !email || !subject || !message) {
    console.warn("⚠️ Validation failed: Missing required fields");
    showNotification("Please fill in all fields", "error");
    return false;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    console.warn("⚠️ Validation failed: Invalid email format");
    showNotification("Please enter a valid email address", "error");
    return false;
  }

  console.log("✅ Form validation passed");
  return true;
}

function showNotification(message, type) {
  console.log(`📢 Showing ${type} notification:`, message);

  // Remove existing notifications
  const existingNotification = document.querySelector(".notification");
  if (existingNotification) {
    existingNotification.remove();
  }

  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas fa-${
        type === "success" ? "check-circle" : "exclamation-circle"
      }"></i>
      <span>${message}</span>
      <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
        <i class="fas fa-times"></i>
      </button>
    </div>
  `;

  // Add to body
  document.body.appendChild(notification);

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentElement) {
      notification.remove();
    }
  }, 5000);
}

function setLoadingState(isLoading) {
  const button = document.getElementById("sendButton");
  const buttonText = button.querySelector(".btn-text");
  const buttonIcon = button.querySelector(".btn-icon");

  if (isLoading) {
    console.log("🔄 Setting loading state...");
    button.disabled = true;
    button.classList.add("loading");
    buttonText.textContent = "Sending...";
    buttonIcon.className = "fas fa-spinner fa-spin btn-icon";

    // Add loading overlay to form
    const formContainer = document.querySelector(".contact-form-container");
    const loadingOverlay = document.createElement("div");
    loadingOverlay.className = "loading-overlay";
    loadingOverlay.innerHTML = `
      <div class="loading-spinner">
        <i class="fas fa-spinner fa-spin"></i>
        <p>Sending your message...</p>
      </div>
    `;
    formContainer.appendChild(loadingOverlay);
  } else {
    console.log("✅ Removing loading state...");
    button.disabled = false;
    button.classList.remove("loading");
    buttonText.textContent = "Send Message";
    buttonIcon.className = "fas fa-paper-plane btn-icon";

    // Remove loading overlay
    const loadingOverlay = document.querySelector(".loading-overlay");
    if (loadingOverlay) {
      loadingOverlay.remove();
    }
  }
}

function sendMsg() {
  console.log("🚀 Send message function called");

  // Check if Firebase database is available
  if (!database) {
    console.error("❌ Firebase database not available");
    showNotification(
      "Connection error. Please refresh the page and try again.",
      "error"
    );
    return;
  }

  if (!validateForm()) {
    return;
  }

  // Set loading state
  setLoadingState(true);

  const name = document.getElementById("ip-name").value.trim();
  const email = document.getElementById("ip-mail").value.trim();
  const subject = document.getElementById("ip-subject").value.trim();
  const message = document.getElementById("ip-msg").value.trim();

  const messageData = {
    name: name,
    email: email,
    subject: subject,
    message: message,
    timestamp: new Date().toISOString(),
  };

  console.log("📤 Preparing to send message data:", messageData);
  console.log("🔄 Connecting to Firebase Database...");

  // Send to Firebase AND Email simultaneously
  Promise.all([
    // Firebase save
    database.ref("contacts").push(messageData),
    // Email notification
    sendEmailNotification(messageData),
  ])
    .then(([firebaseResult, emailResult]) => {
      console.log("✅ Message sent successfully to Firebase");
      console.log("📋 Sent data:", messageData);

      if (emailResult.success) {
        console.log("✅ Email notification sent successfully");
      } else {
        console.warn(
          "⚠️ Email notification failed, but message saved to Firebase"
        );
      }

      // Reset form
      console.log("🔄 Clearing form fields...");
      document.getElementById("ip-name").value = "";
      document.getElementById("ip-mail").value = "";
      document.getElementById("ip-subject").value = "";
      document.getElementById("ip-msg").value = "";
      console.log("✅ Form fields cleared");

      // Remove loading state
      setLoadingState(false);

      // Show success feedback
      console.log("🎉 Showing success feedback to user");
      const successMessage = emailResult.success
        ? "Message sent successfully! You'll receive a beautiful email notification, and I'll get back to you soon."
        : "Message sent successfully! I'll get back to you soon.";

      // Show success modal (optional)
      setTimeout(() => {
        try {
          const successModalElement = document.getElementById("successModal");
          if (successModalElement && typeof bootstrap !== "undefined") {
            const successModal = new bootstrap.Modal(successModalElement);
            successModal.show();
            console.log("📱 Success modal displayed");
          } else {
            console.log(
              "📱 Success modal not available (Bootstrap not loaded or modal not found)"
            );
          }
        } catch (error) {
          console.error("❌ Error showing success modal:", error);
        }
      }, 500);
    })
    .catch((error) => {
      console.error("❌ Error sending message to Firebase:", error);
      console.error("🔍 Error details:", {
        code: error.code,
        message: error.message,
        stack: error.stack,
      });

      // Remove loading state
      setLoadingState(false);

      // Show error feedback
      console.log("⚠️ Showing error feedback to user");
      showNotification(
        "Failed to send message. Please try again or contact me directly.",
        "error"
      );
    });
}

// EmailJS Configuration
const EMAILJS_CONFIG = {
  publicKey: "73yE9hZmGMI8Qj-8G", // Replace with your EmailJS public key
  serviceId: "service_q1qqq0j", // Replace with your EmailJS service ID
  templateId: "template_vybb1y7", // Replace with your EmailJS template ID
};

// Initialize EmailJS
function initializeEmailJS() {
  if (typeof emailjs !== "undefined") {
    emailjs.init(EMAILJS_CONFIG.publicKey);
    console.log("✅ EmailJS initialized successfully");
    return true;
  } else {
    console.error("❌ EmailJS library not loaded");
    return false;
  }
}

// Send beautiful email notification
async function sendEmailNotification(formData) {
  console.log("📧 Sending email notification...", formData);

  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    to_email: "ankang670@gmail.com", // Your email address
    reply_to: formData.email,
    submission_date: new Date().toLocaleString(),
    // Additional styling parameters for beautiful email
    user_browser: navigator.userAgent.split(") ")[0] + ")",
    user_platform: navigator.platform,
  };

  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams
    );

    console.log("✅ Email sent successfully:", response);
    return { success: true, response };
  } catch (error) {
    console.error("❌ Email sending failed:", error);
    return { success: false, error };
  }
}

// Initialize everything when page loads
document.addEventListener("DOMContentLoaded", function () {
  console.log("🚀 Initializing contact form system...");

  // Initialize Firebase
  const firebaseInitialized = initializeFirebase();

  // Initialize EmailJS
  const emailJSInitialized = initializeEmailJS();

  if (firebaseInitialized) {
    console.log("✅ All systems initialized successfully");
  } else {
    console.error("❌ Firebase initialization failed");
  }

  if (!emailJSInitialized) {
    console.warn("⚠️ EmailJS not available - emails won't be sent");
  }

  console.log("🎯 Contact form ready for submissions!");
});

// Set up event listener for button click
document.addEventListener("DOMContentLoaded", function () {
  console.log("🎯 DOM Content Loaded - Setting up event listeners");

  // Initialize Firebase first
  const firebaseReady = initializeFirebase();
  if (!firebaseReady) {
    console.error("❌ Cannot proceed without Firebase");
    return;
  }

  // Initialize EmailJS
  initializeEmailJS();

  const button = document.getElementById("sendButton");
  if (button) {
    console.log("✅ Send button found, attaching event listener");
    button.addEventListener("click", function (event) {
      console.log("🎯 BUTTON CLICKED! - Event triggered successfully");
      event.preventDefault(); // Prevent any default behavior
      sendMsg();
    });
    console.log("✅ Send button event listener attached");
  } else {
    console.error("❌ Send button not found in DOM");
  }

  // Test Firebase connection
  console.log("🔍 Testing Firebase connection...");
  try {
    database.ref(".info/connected").on("value", function (snapshot) {
      if (snapshot.val() === true) {
        console.log("🌐 Firebase connection status: CONNECTED");
      } else {
        console.log("🔴 Firebase connection status: DISCONNECTED");
      }
    });
  } catch (error) {
    console.error("❌ Firebase connection test failed:", error);
  }
});

// Add CSS for notifications and loading states
const additionalStyles = `
<style>
/* Loading overlay */
.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(8, 27, 41, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  z-index: 1000;
  backdrop-filter: blur(10px);
}

.loading-spinner {
  text-align: center;
  color: #ededed;
}

.loading-spinner i {
  font-size: 2rem;
  color: #00abf0;
  margin-bottom: 15px;
  display: block;
}

.loading-spinner p {
  font-size: 1rem;
  margin: 0;
  color: #b8b8b8;
}

/* Enhanced button loading state */
.submit-btn.loading {
  opacity: 0.8;
  transform: none;
  pointer-events: none;
}

.submit-btn.loading:hover {
  transform: none;
  box-shadow: 0 0 15px rgba(0, 171, 240, 0.25);
}

/* Enhanced notifications */
.notification {
  position: fixed;
  top: 20px;
  right: 20px;
  background: rgba(8, 27, 41, 0.95);
  color: white;
  padding: 15px 20px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 9999;
  transform: translateX(100%);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  min-width: 300px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.notification.show {
  transform: translateX(0);
}

.notification.success {
  border-left: 4px solid #00abf0;
  background: rgba(0, 171, 240, 0.1);
}

.notification.error {
  border-left: 4px solid #ff4757;
  background: rgba(255, 71, 87, 0.1);
}

.notification i {
  font-size: 1.2em;
  flex-shrink: 0;
}

.notification.success i {
  color: #00abf0;
}

.notification.error i {
  color: #ff4757;
}

.notification span {
  font-size: 0.9rem;
  line-height: 1.4;
}

/* Form container relative positioning for overlay */
.contact-form-container {
  position: relative;
}

@media (max-width: 768px) {
  .notification {
    top: 10px;
    right: 10px;
    left: 10px;
    transform: translateY(-100%);
    min-width: auto;
  }
  
  .notification.show {
    transform: translateY(0);
  }
  
  .loading-spinner i {
    font-size: 1.5rem;
  }
  
  .loading-spinner p {
    font-size: 0.9rem;
  }
}
</style>
`;

document.head.insertAdjacentHTML("beforeend", additionalStyles);

const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value) {
      input.classList.add("has-value");
    } else {
      input.classList.remove("has-value");
    }
  });
});
