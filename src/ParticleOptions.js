const particleOptions = {
    particles: {
        number: {
        value: 90,
        density: {
            enable: true,
            value_area: 400
        }
        }
    },
    interactivity: {
        detect_on: "window",
        events: {
            onhover: {
                enable: false,
                mode: "repulse"
            }
        },
        modes: {
            repulse: {
                "distance": 125,
                "duration": 0.4
            }
        }
    }
}

export default particleOptions
