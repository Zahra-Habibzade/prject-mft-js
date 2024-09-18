/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "brow":{
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832"
        }
      },
      boxShadow:{
        "Shadow":"0px 1px 10px 0px #0000000D"
      },
      borderRadius:{
       "4xl": "2rem"
      },
      fontFamily:{
        "Dana" : "dana",
        "DanaMedium" : "dana Medium",
        "Danabold" : "dana bold",
        "MorabbaBold" : "Morabba Bold",
        "MorabbaLight" : "Morabba Light",
        "MorabbaMedium" : "Morabba Medium",
      }

    },
  },
  plugins: [],
}

