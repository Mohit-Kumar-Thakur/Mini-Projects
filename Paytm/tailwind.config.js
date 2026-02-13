/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
        colors :{
            Paytm_Blue: "#00baf2",
            dark_paytm_blue: '#002970',
            lightColor:'#f5f5f5',
            lightPaytmBlue:'#00afe3',
            lightDarkBlue:'#0f4a8a',
            bgColor:'#f5f7fa',
            ultalightPaytmBlue :'#4ccff6',
            line:'#cccccc',
            fontColor:'#505050',
            smallFontColor:'#707086'
        },
        screens : {
            'verySmall' : {'max' : "399px"},
            'small' : {'max' :"550px"},
            'medium' :{'max' :"768px"},
            'large': {'max':'1070px'},
        }
    },
  },
  plugins: [],
}

