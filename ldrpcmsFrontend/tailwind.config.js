/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                bgColor: "#f7f8fa",
                borderColor: "#e0e2e5",
                primary: {
                    50: "#f9f4ff",
                    100: "#f0e5ff",
                    200: "#e4d0ff",
                    300: "#cfacff",
                    400: "#b176ff",
                    500: "#9442ff",
                    600: "#8833ff",
                    700: "#680ee2",
                    800: "#5a12b7",
                    900: "#4b1093",
                    950: "#30006f",
                },
                textColor: {
                    50: "#f6f7f9",
                    100: "#eceef2",
                    200: "#d5d9e2",
                    300: "#afb7ca",
                    400: "#8491ac",
                    500: "#6b7a99",
                    600: "#505c79",
                    700: "#424b62",
                    800: "#394153",
                    900: "#333947",
                    950: "#22252f",
                },
            },
        },
    },
    plugins: [],
};
