if (!customElements.get('social-share')) {
  customElements.define(
    'social-share',
    class SocialShare extends HTMLElement {
      constructor() {
        super();
      }

      connectedCallback() {
        this.setupEventListeners();
      }

      setupEventListeners() {
        const copyButton = this.querySelector('[data-action="copy"]'),
          socialLinks = this.querySelectorAll(".social-share-icon[data-action]");
        copyButton.addEventListener("click", this.copyToClipboard.bind(this)),
          socialLinks.forEach((link) => {
            link.dataset.action !== "copy" && link.addEventListener("click", this.handleSocialShare.bind(this));
          });
      }

      async copyToClipboard() {
        const url = window.location.href,
          feedback = this.querySelector("[data-feedback]");
        try {
          await navigator.clipboard.writeText(url),
            feedback.classList.add("show"),
            setTimeout(() => {
              feedback.classList.remove("show");
            }, 2e3);
        } catch {
          const textArea = document.createElement("textarea");
          (textArea.value = url),
            document.body.appendChild(textArea),
            textArea.select(),
            document.execCommand("copy"),
            document.body.removeChild(textArea),
            feedback.classList.add("show"),
            setTimeout(() => {
              feedback.classList.remove("show");
            }, 2e3);
        }
      }

      handleSocialShare(event) {
        event.preventDefault();
        const action = event.currentTarget.dataset.action,
          url = this.url || encodeURIComponent(window.location.href),
          title = this.title || encodeURIComponent(document.title);
        let shareUrl = "";
        switch (action) {
          case "facebook":
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            break;
          case "twitter":
            shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
            break;
          case "whatsapp":
            shareUrl = `https://wa.me/?text=${title}%20${url}`;
            break;
          case "youtube":
            shareUrl = `https://www.youtube.com/redirect?q=${url}`;
            break;
          case "instagram":
            shareUrl = `https://www.instagram.com/?url=${url}`;
            break;
        }
        shareUrl && window.open(shareUrl, "_blank", "width=600,height=400,scrollbars=yes,resizable=yes");
      }

      get url() {
        return this.dataset.url;
      }

      get title() {
        return this.dataset.title;
      }
    }
  )
}

