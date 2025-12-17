#![allow(non_snake_case)]

use web_component::prelude::*;

mod landing_page;

use landing_page::LandingPage;

#[derive(Clone, Routable, Debug, PartialEq)]
enum Route {
    #[route("/")]
    LandingPage {},
}

fn App() -> Element {
    rsx! {
        Router::<Route> {}
    }
}

fn main() {
    launch(App);
}
