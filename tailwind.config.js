module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens:{
        "desk": "1440px",
      },
      backgroundColor:{
        "darkCyan": "hsl(185, 75%, 39%)",
        "veryDarkDesBlue": "hsl(229, 23%, 23%)",
        "darkGrayhblue": "hsl(227, 10%, 46%)",
      },
      fontFamily:{
        "kumbhSans": ["Kumbh Sans", "serif-Sans"],
      },
      textColor:{
        "darkGray": "hsl(0, 0%, 59%)",
      },
      fontSize:{
        "18px": "18px",
        "14px": "14px",
        "16px": "16px",
        "12px": "12px",
        "9px": "9px",
        "6px": "6px",
      },
      backgroundImage:{
        "patternBottom": "url('/svg/bg-pattern-bottom.svg')",
        "patternCard": "url('/svg/bg-pattern-card.svg')",
        "patternTop": "url('/svg/bg-pattern-top.svg')",
        "imageVictor": "url('/img/image-victor.jpg')",
      },
      width:{
        "329px": "329px",
        "350px": "350px",
        "97px": "97px",
      },
      height:{
        "139px": "139px",
        "97px": "97px",
      },
      padding:{
        "90px": "90px",
        "70px": "70px",
        "26px": "26px",
        "24px": "24px",
        "18px": "18px",
        "10px": "10px",
        "13px": "13px",



      },
      backgroundSize:{
        "100%": "100%",
      },
      scale:{
        "200":"2",
      },
      translate:{
        "96": "22rem",
        "95%": "110%",
      },
      borderWidth: {
        "default": "1px",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
