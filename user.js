//

// disable website bloat
user_pref("browser.display.use_document_fonts", 0);
user_pref("dom.enable_performance", false);
user_pref("dom.serviceWorkers.enabled", false);
user_pref("geo.enabled", false);
user_pref("privacy.resistFingerprinting", true);

// TORrrrr
user_pref("network.proxy.socks_remote_dns", true);

// slow af
user_pref("pdfjs.disabled", true);

// unused feature
user_pref("extensions.pocket.enabled", false);

// annoying af
user_pref("browser.fixup.alternate.enabled", false);
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.newtab.url", "about:blank");
user_pref("browser.startup.page", 3);
user_pref("browser.tabs.closeButtons", 2);
user_pref("browser.tabs.closeWindowWithLastTab", false);
user_pref("browser.tabs.warnOnClose", false);
user_pref("browser.urlbar.decodeURLsOnCopy", true);
user_pref("browser.urlbar.searchSuggestionsChoice", false);
user_pref("browser.urlbar.trimURLs", false);
user_pref("keyword.enabled", false);
user_pref("ui.key.menuAccessKeyFocuses", false);

// disable animations
user_pref("browser.download.animateNotifications", false);
user_pref("browser.history_swipe_animation.disabled", true);
user_pref("browser.stopReloadAnimation.enabled", false);
user_pref("toolkit.cosmeticAnimations.enabled", false);

// red eyes
user_pref("browser.in-content.dark-mode", true);
user_pref("devtools.thememode", "dark");
user_pref("reader.color_scheme", "dark");
user_pref("ui.systemUsesDarkTheme", true);

// separate search box
user_pref("browser.search.widget.inNavBar", true);

// smoother than smooth scroll
user_pref("general.autoScroll", true);
user_pref("general.smoothScroll", false);
user_pref("toolkit.scrollbox.smoothScroll", false);

// 4k
user_pref("layout.css.devPixelsPerPx", 2);

// prevent syncing 1k+ opened tabs
user_pref("services.sync.engine.history", false);
user_pref("services.sync.engine.tabs", false);

// enable css haxxx
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
