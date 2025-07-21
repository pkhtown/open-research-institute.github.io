class ORIFooter extends HTMLElement {
    constructor() {
      super();
      
      // Create a shadow DOM
      this.attachShadow({ mode: 'open' });
      
      // Set up the footer HTML and CSS
      this.shadowRoot.innerHTML = `
        <style>
          /* Footer Styles */
          :host {
            display: block;
          }
          
          footer {
              padding: 4rem 2rem;
              background-color: #000;
              color: #fff;
              text-align: center;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          }
          
          .footer-content {
              max-width: 800px;
              margin: 0 auto;
          }
          
          .footer-links {
              display: flex;
              justify-content: center;
              margin-bottom: 2rem;
              flex-wrap: wrap;
          }
          
          .footer-links a {
              color: #fff;
              text-decoration: none;
              margin: 0 1rem;
              padding: 0.5rem 0;
              opacity: 0.8;
              transition: opacity 0.3s;
          }
          
          .footer-links a:hover {
              opacity: 1;
          }
          
          .copyright {
              opacity: 0.6;
              font-size: 0.9rem;
          }
        </style>
        
        <footer>
          <div class="footer-content">
              <img src="assets/public-domain.png" width="300px"/>
              
              <div class="copyright" style="margin-top:20px; margin-bottom:20px">
                  The Open Research Institute itself is open source. Please copy, steal, remix to your heart's desire. All the infrastructure we create is building blocks that others can freely use towards the best possible implementation of this idea. <a style="color: #fff;" href="https://creativecommons.org/publicdomain/zero/1.0/">CC0, no rights reserved</a>
              </div>
  
              <div class="footer-links">
                  <a target="_blank" href="https://github.com/Open-Research-Institute/open-research-institute.github.io">GitHub</a>
              </div>
          </div>
        </footer>
      `;
    }
  }
  
  // Register the custom element
  customElements.define('ori-footer', ORIFooter);