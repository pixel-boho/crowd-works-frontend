'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ngo documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-192f52083328f12ad2c9eb72a237aa240dd6e943f9da7f41393f3b200daa4487cbd9a14d83f501716edc03ad45f80c062825657c3773839a6ad3c7a518f48b94"' : 'data-bs-target="#xs-components-links-module-AppModule-192f52083328f12ad2c9eb72a237aa240dd6e943f9da7f41393f3b200daa4487cbd9a14d83f501716edc03ad45f80c062825657c3773839a6ad3c7a518f48b94"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-192f52083328f12ad2c9eb72a237aa240dd6e943f9da7f41393f3b200daa4487cbd9a14d83f501716edc03ad45f80c062825657c3773839a6ad3c7a518f48b94"' :
                                            'id="xs-components-links-module-AppModule-192f52083328f12ad2c9eb72a237aa240dd6e943f9da7f41393f3b200daa4487cbd9a14d83f501716edc03ad45f80c062825657c3773839a6ad3c7a518f48b94"' }>
                                            <li class="link">
                                                <a href="components/AboutUsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutUsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AmlPolicyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AmlPolicyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CampaignComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CampaignComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CancellationPolicyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CancellationPolicyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactUsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactUsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DemoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DemoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DonateNowComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DonateNowComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DonateUserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DonateUserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditFundraiserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditFundraiserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditLoanComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditLoanComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FundRaiserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FundRaiserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FundRaiserDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FundRaiserDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HowItWorksComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HowItWorksComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LendComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LendComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoanDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoanDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OurCampaignsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OurCampaignsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageNotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PaytmComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaytmComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PaytmPaymentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaytmPaymentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PrivacyPolicyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrivacyPolicyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignUpComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignUpComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StartFundraiserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StartFundraiserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StatisticsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatisticsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TermsAndConditionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TermsAndConditionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VolunteerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VolunteerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WithdrawStartFundraiserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WithdrawStartFundraiserComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-AppModule-192f52083328f12ad2c9eb72a237aa240dd6e943f9da7f41393f3b200daa4487cbd9a14d83f501716edc03ad45f80c062825657c3773839a6ad3c7a518f48b94"' : 'data-bs-target="#xs-directives-links-module-AppModule-192f52083328f12ad2c9eb72a237aa240dd6e943f9da7f41393f3b200daa4487cbd9a14d83f501716edc03ad45f80c062825657c3773839a6ad3c7a518f48b94"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AppModule-192f52083328f12ad2c9eb72a237aa240dd6e943f9da7f41393f3b200daa4487cbd9a14d83f501716edc03ad45f80c062825657c3773839a6ad3c7a518f48b94"' :
                                        'id="xs-directives-links-module-AppModule-192f52083328f12ad2c9eb72a237aa240dd6e943f9da7f41393f3b200daa4487cbd9a14d83f501716edc03ad45f80c062825657c3773839a6ad3c7a518f48b94"' }>
                                        <li class="link">
                                            <a href="directives/DragDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DragDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CheckoutModule.html" data-type="entity-link" >CheckoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CheckoutModule-1e679762df4f7fd8d07816cb0cc6d180fe38e6105192fc338e0de9f6a289079714f90340477c72d6b7e10441be3e06b8c9768fe9b7a6da09ce712283ec146def"' : 'data-bs-target="#xs-components-links-module-CheckoutModule-1e679762df4f7fd8d07816cb0cc6d180fe38e6105192fc338e0de9f6a289079714f90340477c72d6b7e10441be3e06b8c9768fe9b7a6da09ce712283ec146def"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CheckoutModule-1e679762df4f7fd8d07816cb0cc6d180fe38e6105192fc338e0de9f6a289079714f90340477c72d6b7e10441be3e06b8c9768fe9b7a6da09ce712283ec146def"' :
                                            'id="xs-components-links-module-CheckoutModule-1e679762df4f7fd8d07816cb0cc6d180fe38e6105192fc338e0de9f6a289079714f90340477c72d6b7e10441be3e06b8c9768fe9b7a6da09ce712283ec146def"' }>
                                            <li class="link">
                                                <a href="components/CheckoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CheckoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link" >AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/CheckoutOptions.html" data-type="entity-link" >CheckoutOptions</a>
                            </li>
                            <li class="link">
                                <a href="classes/circle.html" data-type="entity-link" >circle</a>
                            </li>
                            <li class="link">
                                <a href="classes/column.html" data-type="entity-link" >column</a>
                            </li>
                            <li class="link">
                                <a href="classes/ICheckoutOptions.html" data-type="entity-link" >ICheckoutOptions</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ApiService.html" data-type="entity-link" >ApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CheckoutService.html" data-type="entity-link" >CheckoutService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AdminGuard.html" data-type="entity-link" >AdminGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/FileHandle.html" data-type="entity-link" >FileHandle</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICheckoutInstance.html" data-type="entity-link" >ICheckoutInstance</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IStringDictionary.html" data-type="entity-link" >IStringDictionary</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Window.html" data-type="entity-link" >Window</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});