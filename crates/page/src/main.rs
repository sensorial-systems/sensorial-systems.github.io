#![allow(non_snake_case)]

use dioxus::prelude::*;

mod brand;
mod canvas;
mod landing_page;
mod product;
mod theme;

use landing_page::LandingPage;
use theme::Theme;

#[derive(Clone, Routable, Debug, PartialEq)]
enum Route {
    #[route("/")]
    LandingPage {},
}

fn App() -> Element {
    let theme = Theme::default();
    let style = theme.to_css_style();
    rsx! {
        document::Title { "Sensorial Systems" }
        document::Link { rel: "apple-touch-icon", sizes: "57x57", href: "/favicon/apple-icon-57x57.png" }
        document::Link { rel: "apple-touch-icon", sizes: "60x60", href: "/favicon/apple-icon-60x60.png" }
        document::Link { rel: "apple-touch-icon", sizes: "72x72", href: "/favicon/apple-icon-72x72.png" }
        document::Link { rel: "apple-touch-icon", sizes: "76x76", href: "/favicon/apple-icon-76x76.png" }
        document::Link { rel: "apple-touch-icon", sizes: "114x114", href: "/favicon/apple-icon-114x114.png" }
        document::Link { rel: "apple-touch-icon", sizes: "120x120", href: "/favicon/apple-icon-120x120.png" }
        document::Link { rel: "apple-touch-icon", sizes: "144x144", href: "/favicon/apple-icon-144x144.png" }
        document::Link { rel: "apple-touch-icon", sizes: "152x152", href: "/favicon/apple-icon-152x152.png" }
        document::Link { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon/apple-icon-180x180.png" }
        document::Link { rel: "icon", r#type: "image/png", sizes: "192x192", href: "/favicon/android-icon-192x192.png" }
        document::Link { rel: "icon", r#type: "image/png", sizes: "32x32", href: "/favicon/favicon-32x32.png" }
        document::Link { rel: "icon", r#type: "image/png", sizes: "96x96", href: "/favicon/favicon-96x96.png" }
        document::Link { rel: "icon", r#type: "image/png", sizes: "16x16", href: "/favicon/favicon-16x16.png" }
        document::Link { rel: "manifest", href: "/favicon/manifest.json" }
        document::Meta { name: "msapplication-TileImage", content: "/favicon/ms-icon-144x144.png" }
        document::Meta { name: "msapplication-TileColor", content: "#ffffff" }
        document::Meta { name: "theme-color", content: "#ffffff" }
        document::Meta { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" }
        { style }
        Router::<Route> {}
    }
}

fn main() {
    launch(App);
}
