import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{direction: 'ltr'}} dir="ltr" >
    <head>
      <link href="https://www.bankhapoalim.com/sites/all/themes/poalim/css/style.css" rel="stylesheet" key="test"/>
      <link href="https://www.bankhapoalim.com/sites/all/themes/poalim/libraries/bootstrap/css/bootstrap.min.css?s9gl80" rel="stylesheet" key="test"/>
    </head>
    <body className={inter.className}>
    <Header/>
    <div className="flex flex-col items-center justify-center bg-blue-100 bg-no-repeat bg-[url('/background.jpg')] py-4 bg-center">
      {children}
    </div>
    <Footer/>
    </body>
    </html>
  );
}
const Header = () => {
  return (
    <div dangerouslySetInnerHTML={{
      __html: `
    <header class="container">
    <script>
        function toggleArrow(event) {
          event.target.closest(".arrow").classList.toggle('show');
        }
        function toggleMenu() {
          console.log('toggling menu');
          document.querySelector('html').classList.toggle('mobile-menu-open');
        }
    </script>
        <div class="row header-main-row">
    <div class="col">
        <div class="header-inner">
            <div class="header-inner-top" role="navigation">
                <nav class="top-header-tabs">
                                        <ul class="menu links" role="navigation">
                                                    <li class="item">
                                <a target="_blank" href="https://www.bhiusa.com/" rel="nofollow" aria-label="BHI" title="BHI" id="header_top_l1">BHI</a>
                            </li>
                                                    <li class="item">
                                <a target="_blank" href="https://www.bankhapoalim.co.il/he" rel="nofollow" aria-label="Hebrew Website" title="Hebrew Website" id="header_top_l2">Hebrew Website</a>
                            </li>
                                                    <li class="item">
                                <a target="_blank" href="https://www.bankhapoalim.com/ar" rel="nofollow" aria-label="Arabic Website" title="Arabic Website" id="header_top_l3">Arabic Website</a>
                            </li>
                                            </ul>
                    <div class="promoted-links">
                        
                    </div>
                </nav>
            </div>
            <div class="header-inner-body" role="navigation">
                <div class="header-main-content ">
                    <div class="mobile-menu">
    <button class="mobile-menu-toggle hamburger" type="button" aria-label="Toggle navigation" onclick="toggleMenu()">
        <span class="mobile-menu-icon">
            <img src="https://www.bankhapoalim.com/sites/all/themes/poalim/images/hamburger.svg" alt="Toggle navigation">
        </span>
    </button>
    <div class="drawer-overlay mobile-menu-toggle" onclick="toggleMenu()"></div>
    <div class="mobile-menu-drawer">
        <div class="menu-top ">
            <a href="https://login.bankhapoalim.co.il" class="login-button" id="top_mobile_l1" rel="nofollow">
                <span>Login</span>
            </a>
            <button class="mobile-menu-toggle close"></button>
        </div>
        <div class="menu-main">
            <div class="menu-inner collapse-menu">
                
              <ul class="menu links">
              <li class="menu-icon menu-icon-199">
        <a href="https://www.bankhapoalim.com/en/_contact_us" id="main_mobile_l1">Contact Us</a>
              </li>
          <li class="menu-icon menu-icon-197 arrow" onclick="toggleArrow(event)">
        <span>What are you interested in?</span>
                                <ul>
              <li class="menu-icon menu-icon-191 menu-icon-file">
        <a href="https://www.bankhapoalim.com/en/about-us" data-drupal-link-system-path="node/84" id="main_mobile_l2_l1">About Us</a>
              </li>
          <li class="menu-icon menu-icon-196 menu-icon-file">
        <a href="https://www.bankhapoalim.com/en/investor-relations" data-drupal-link-system-path="node/83" id="main_mobile_l2_l2">Investor Relations</a>
              </li>
          <li class="menu-icon menu-icon-194 menu-icon-file">
        <a href="https://www.bankhapoalim.com/en/financial-institutions-group" data-drupal-link-system-path="node/81" id="main_mobile_l2_l3">FIG</a>
              </li>
          <li class="menu-icon menu-icon-195 menu-icon-file">
        <a href="https://www.bankhapoalim.com/en/online-banking" data-drupal-link-system-path="node/82" id="main_mobile_l2_l4">Online Banking</a>
              </li>
          <li class="menu-icon menu-icon-209 menu-icon-file">
        <a href="https://www.bankhapoalim.com/en/global-presence" data-drupal-link-system-path="node/77" class="is-active" id="main_mobile_l2_l5">Global Presence</a>
              </li>
        </ul>
  
              </li>
        </ul>
  


            </div>
        </div>
        <div class="menu-footer">
            <div class="footer-menu collapse-menu">
                
              <ul class="menu links">
              <li class="menu-icon menu-icon-158 arrow" onclick="toggleArrow(event)">
        <span role="heading" aria-level="4">Additional information</span>
                                <ul>
              <li class="menu-icon menu-icon-156">
        <a href="https://www.bankhapoalim.com/en/global-presence" data-drupal-link-system-path="node/77" class="is-active" id="footer_mobile_col1_l1"> Our global presence</a>
              </li>
          <li class="menu-icon menu-icon-157">
        <a href="https://www.bankhapoalim.com/en/contact-us" data-drupal-link-system-path="node/202" id="footer_mobile_col1_l2">Contact us</a>
              </li>
          <li class="menu-icon menu-icon-159">
        <a href="https://www.bankhapoalim.co.il/he/fee-list" id="footer_mobile_col1_l3" rel="nofollow">Bank fees</a>
              </li>
          <li class="menu-icon menu-icon-211">
        <a href="https://www.bankhapoalim.com/en/node/1201" id="footer_mobile_col1_l4" rel="nofollow">Accessibility</a>
              </li>
          <li class="menu-icon menu-icon-160">
        <a href="https://www.bankhapoalim.com/en/terms-and-conditions" data-drupal-link-system-path="node/78" id="footer_mobile_col1_l5">Legal disclaimer</a>
              </li>
          <li class="menu-icon menu-icon-210">
        <a href="https://www.bankhapoalim.com/en/foreign-exchange-rates" data-drupal-link-system-path="node/875" id="footer_mobile_col1_l6">Foreign exchange rates</a>
              </li>
          <li class="menu-icon menu-icon-162">
        <a href="https://www.bankhapoalim.com/en/system-requirements" data-drupal-link-system-path="node/204" id="footer_mobile_col1_l7">System requirements</a>
              </li>
          <li class="menu-icon menu-icon-213">
        <a href="https://www.bankhapoalim.com/en/investor-relations/social-responsibility/anti-money-laundering" data-drupal-link-system-path="node/87" id="footer_mobile_col1_l8">Anti Money Laundering</a>
              </li>
          <li class="menu-icon menu-icon-163">
        <a href="https://www.bankhapoalim.com/en/sitemap" data-drupal-link-system-path="sitemap" id="footer_mobile_col1_l9">Site map</a>
              </li>
          <li class="menu-icon menu-icon-161">
        <a href="https://www.bankhapoalim.com/en/privacy-policy" id="footer_mobile_col1_l10" rel="nofollow">Privacy policy</a>
              </li>
        </ul>
  
              </li>
          <li class="menu-icon menu-icon-155 arrow" onclick="toggleArrow(event)">
        <span role="heading" aria-level="4">More of our  websites</span>
                                <ul>
              <li class="menu-icon menu-icon-164">
        <a href="https://www.bhiusa.com/" id="footer_mobile_col2_l1" rel="nofollow">BHI</a>
              </li>
          <li class="menu-icon menu-icon-165">
        <a href="https://secure.poalimcm.com/poalimcm.com/fintech/overview" id="footer_mobile_col2_l2" rel="nofollow">FinTech</a>
              </li>
          <li class="menu-icon menu-icon-167">
        <a href="https://www.bankhapoalim.co.il/he" id="footer_mobile_col2_l3" rel="nofollow">Private customer Hebrew website</a>
              </li>
          <li class="menu-icon menu-icon-166">
        <a href="https://www.bankhapoalim.com/ar" id="footer_mobile_col2_l4" rel="nofollow">Private customer Arabic website</a>
              </li>
          <li class="menu-icon menu-icon-169">
        <a href="https://www.bankhapoalim.biz/" target="_blank" id="footer_mobile_col2_l5" rel="nofollow"> Business customer Hebrew website</a>
              </li>
          <li class="menu-icon menu-icon-168">
        <a href="https://www.bankhapoalim-corp.biz/he" target="_blank" id="footer_mobile_col2_l6" rel="nofollow">Corporate banking Hebrew website</a>
              </li>
        </ul>
  
              </li>
        </ul>
  


            </div>
            <div class="client-buttons">
                                                <div class="top-header-tabs">
                                        <ul class="top-header-tabs">
                                                    <li class="item">
                                <a href="https://www.bankhapoalim.com/ar" rel="nofollow">Arabic Website</a>
                            </li>
                                                    <li class="item">
                                <a href="https://www.bankhapoalim-corp.biz/he" rel="nofollow">Business Division</a>
                            </li>
                                            </ul>
                </div>
            </div>
        </div>
    </div>
</div>
                    <div class="logo">
                    <a title="logo" href="https://www.bankhapoalim.com/en" style="background-image: url(https://www.bankhapoalim.com/sites/bnhpcom/files/%D7%9C%D7%95%D7%92%D7%95%20%D7%90%D7%A0%D7%92%D7%9C%D7%99%D7%AA.png)">
                        logo
                    </a>
                </div>
                <nav class="main-menu">
                    
                </nav>
            </div>
            <nav class="header-toolbar ">
                <ul>
                    <li class="search">
                        <button aria-expanded="false">
                            <img src="https://www.bankhapoalim.com/sites/all/themes/poalim/images/search.svg" alt="Search">
                            <span>Search</span>
                        </button>
                        <div class="header-search">
                            <div class="header-search-inner">
                                <button class="close-search" title="Close">Close</button>
                                
<div class="poalim-search-form">
    <div class="search-wrapper">
        <div class="form-input">
            <form class="poalim-elastic-search" data-drupal-selector="poalim-elastic-search" action="https://www.bankhapoalim.com/" method="post" id="poalim-elastic-search" accept-charset="UTF-8">
  



<div class="js-form-item form-item js-form-type-textfield form-item-keys js-form-item-keys form-no-label">
                <input autocomplete="off" aria-label="Search by topic, questions and keywords - this is a field with auto-completion - start typing and go with the arrows on the keyboard for the filtered results" data-drupal-selector="edit-keys" data-msg-maxlength="This field field has a maximum length of 128." type="text" id="edit-keys" name="keys" value="" size="60" maxlength="128" placeholder="Search by subject, question or keywords." class="form-text">

                </div>
<input disabled="" aria-label="Click to search and continue to the filtered results." data-drupal-selector="edit-submit" type="submit" id="edit-submit" name="op" value="Submit" class="button js-form-submit form-submit">
<input autocomplete="off" data-drupal-selector="form-j8euuaa7icamdphsgmcr1hmqpr6xtyb-31hoxvxb9ja" type="hidden" name="form_build_id" value="form-J8eUUAA7IcAmDPhSgmCR1HMqpr6xtyB_31hOxvxb9jA">
<input data-drupal-selector="edit-poalim-elastic-search" type="hidden" name="form_id" value="poalim_elastic_search">

</form>

        </div>
        <div class="form-clear-btn">
            <button class="clear-form waves-effect waves-light no-trans-effect" title="Clear">Clear</button>
        </div>
    </div>
<ul class="search-suggest"></ul></div>
                            </div>
                        </div>
                    </li>

                    <div class="secondary-main-navigation desktop ">
                      
              <ul class="menu links">
              <li class="menu-icon menu-icon-183 menu-icon-file">
        <a href="https://www.bankhapoalim.com/en/global-presence" title="Global Presence" data-drupal-link-system-path="node/77" class="is-active">Global Presence</a>
              </li>
          <li class="menu-icon menu-icon-181 menu-icon-file">
        <a href="https://www.bankhapoalim.com/en/contact-us" title="contact-us" data-drupal-link-system-path="node/202">Contact Us</a>
              </li>
        </ul>
  


                    </div>
                    <div class="secondary-main-navigation mobile ">
                      
              <ul class="menu links">
              <li class="menu-icon menu-icon-185 menu-icon-file">
        <a href="https://www.bankhapoalim.com/en/contact-us" data-drupal-link-system-path="node/202">Contact Us</a>
              </li>
        </ul>
  


                    </div>
                    <li class="login ">
                        <a href="https://login.bankhapoalim.co.il/ng-portals/auth/en/" class="login-button login-desktop" rel="nofollow">
                            <span class="desktop">Log in</span>
                        </a>
                        <a href="https://login.bankhapoalim.co.il/ng-portals/auth/en/" class="login-button login-mobile" rel="nofollow">
                            <span class="mobile">Log in</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
        </div>
</div>

<div class="row">
    <div class="col">
        <div id="block-poalim-breadcrumbs" class="breadcrumbs-no-plazma">
  
    
          <nav class="breadcrumb 34234234" role="navigation" aria-label="Your location on the site">
        <span id="system-breadcrumb" class="visually-hidden" aria-label="Navigator Trail"></span>
    </nav>

  </div>

    </div>
</div>
  </header>
    `
    }}/>
  );
};

const Footer = () => {
  return (
    <div dangerouslySetInnerHTML={{
      __html: `<footer role="footer">
    


<span class="sr-only" tabindex="0">footer</span>

<div class="container" style="margin: auto; max-width: 1024px;">
    

      <div class="combine-shape"><img src="https://www.bankhapoalim.com/sites/all/themes/poalim/images/combined-shape.svg"></div>
              <div class="footer-inner">
            <div class="footer-inner-body">
                <div class="row">
                    <div class="col-lg-8 footer-menu collapse-menu">
                        
              <ul class="menu links">
              <li class="menu-icon menu-icon-158 arrow" onclick="toggleArrow(event)">
        <span role="heading" aria-level="4">Additional information</span>
                                <ul>
              <li class="menu-icon menu-icon-156">
        <a href="https://www.bankhapoalim.com/en/global-presence" data-drupal-link-system-path="node/77" class="is-active" id="footer_col1_l1"> Our global presence</a>
              </li>
          <li class="menu-icon menu-icon-157">
        <a href="https://www.bankhapoalim.com/en/contact-us" data-drupal-link-system-path="node/202" id="footer_col1_l2">Contact us</a>
              </li>
          <li class="menu-icon menu-icon-159">
        <a href="https://www.bankhapoalim.co.il/he/fee-list" id="footer_col1_l3" rel="nofollow">Bank fees</a>
              </li>
          <li class="menu-icon menu-icon-211">
        <a href="https://www.bankhapoalim.com/en/node/1201" id="footer_col1_l4" rel="nofollow">Accessibility</a>
              </li>
          <li class="menu-icon menu-icon-160">
        <a href="https://www.bankhapoalim.com/en/terms-and-conditions" data-drupal-link-system-path="node/78" id="footer_col1_l5">Legal disclaimer</a>
              </li>
          <li class="menu-icon menu-icon-210">
        <a href="https://www.bankhapoalim.com/en/foreign-exchange-rates" data-drupal-link-system-path="node/875" id="footer_col1_l6">Foreign exchange rates</a>
              </li>
          <li class="menu-icon menu-icon-162">
        <a href="https://www.bankhapoalim.com/en/system-requirements" data-drupal-link-system-path="node/204" id="footer_col1_l7">System requirements</a>
              </li>
          <li class="menu-icon menu-icon-213">
        <a href="https://www.bankhapoalim.com/en/investor-relations/social-responsibility/anti-money-laundering" data-drupal-link-system-path="node/87" id="footer_col1_l8">Anti Money Laundering</a>
              </li>
          <li class="menu-icon menu-icon-163">
        <a href="https://www.bankhapoalim.com/en/sitemap" data-drupal-link-system-path="sitemap" id="footer_col1_l9">Site map</a>
              </li>
          <li class="menu-icon menu-icon-161">
        <a href="https://www.bankhapoalim.com/en/privacy-policy" id="footer_col1_l10" rel="nofollow">Privacy policy</a>
              </li>
        </ul>
  
              </li>
          <li class="menu-icon menu-icon-155 arrow" onclick="toggleArrow(event)">
        <span role="heading" aria-level="4">More of our  websites</span>
                                <ul>
              <li class="menu-icon menu-icon-164">
        <a href="https://www.bhiusa.com/" id="footer_col2_l1" rel="nofollow">BHI</a>
              </li>
          <li class="menu-icon menu-icon-165">
        <a href="https://secure.poalimcm.com/poalimcm.com/fintech/overview" id="footer_col2_l2" rel="nofollow">FinTech</a>
              </li>
          <li class="menu-icon menu-icon-167">
        <a href="https://www.bankhapoalim.co.il/he" id="footer_col2_l3" rel="nofollow">Private customer Hebrew website</a>
              </li>
          <li class="menu-icon menu-icon-166">
        <a href="https://www.bankhapoalim.com/ar" id="footer_col2_l4" rel="nofollow">Private customer Arabic website</a>
              </li>
          <li class="menu-icon menu-icon-169">
        <a href="https://www.bankhapoalim.biz/" target="_blank" id="footer_col2_l5" rel="nofollow"> Business customer Hebrew website</a>
              </li>
          <li class="menu-icon menu-icon-168">
        <a href="https://www.bankhapoalim-corp.biz/he" target="_blank" id="footer_col2_l6" rel="nofollow">Corporate banking Hebrew website</a>
              </li>
        </ul>
  
              </li>
        </ul>
  


                    </div>
                    <div class="col-lg-3 offset-lg-1 client-buttons">
                        
              <ul class="menu links">
              <li class="menu-icon menu-icon-189">
        <a href="https://www.bankhapoalim.com/ar" rel="nofollow">Arabic Website</a>
              </li>
          <li class="menu-icon menu-icon-190">
        <a href="https://www.bankhapoalim-corp.biz/he" rel="nofollow">Business Division</a>
              </li>
        </ul>
  


                    </div>
                </div>
                <div class="row">
                                      <div class="col-lg-6 footer-applications-menu">
                        
              <ul class="menu links">
              <li class="menu-icon menu-icon-174 arrow">
        <span role="heading" aria-level="4">Bank Hapoalim Applications</span>
                                <ul>
              <li class="menu-icon menu-icon-175 menu-icon-file">
        <a href="https://accountmanagement.poalimlinks.co.il/deeplink/default" id="footer_app_l1" rel="nofollow">Bank Hapoalim</a>
              </li>
          <li class="menu-icon menu-icon-176 menu-icon-file">
        <a href="https://tradeapp.page.link/CM" id="footer_app_l2" rel="nofollow">Capital Market</a>
              </li>
          <li class="menu-icon menu-icon-180 menu-icon-file">
        <a href="https://static.bankhapoalim.co.il/business" id="footer_app_l3" rel="nofollow">Business</a>
              </li>
          <li class="menu-icon menu-icon-178 menu-icon-file">
        <a href="https://poalimlinks.co.il/deeplink/adult" id="footer_app_l4" rel="nofollow">open</a>
              </li>
          <li class="menu-icon menu-icon-179 menu-icon-file">
        <a href="https://www.bitpay.co.il/" id="footer_app_l5" rel="nofollow">bit</a>
              </li>
        </ul>
  
              </li>
        </ul>
  


                    </div>
                    <div class="col-lg-6 footer-social-links-menu">
                      
              <ul class="menu links">
              <li class="menu-icon menu-icon-172 menu-icon-file">
        <a href="https://www.facebook.com/BankHapoalimSocial" id="footer_social_l1" rel="nofollow">Facebook</a>
              </li>
          <li class="menu-icon menu-icon-170 menu-icon-file">
        <a href="https://www.instagram.com/poalimbank/?igshid=gasygeq4gd2" id="footer_social_l2" rel="nofollow">Instegram</a>
              </li>
          <li class="menu-icon menu-icon-173 menu-icon-file">
        <a href="https://twitter.com/PoaliMarkeTweet" id="footer_social_l3" rel="nofollow">Twitter</a>
              </li>
          <li class="menu-icon menu-icon-171 menu-icon-file">
        <a href="https://www.youtube.com/user/BankHapoalim" target="_blank" id="footer_social_l4" rel="nofollow">YouTube</a>
              </li>
        </ul>
  


                    </div>
                                    </div>
            </div>
        </div>

    
</div>
  </footer>`
    }}/>
  );
};

