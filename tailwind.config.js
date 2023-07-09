/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/main.jsx',
    './src/App.jsx',
    './src/components/Header.jsx',
    './src/components/Map.jsx',
    './index.html'
  ],
  theme: {
    extend: {
      screens: {
        'clg': {'max': '1050px'},
        'cmd': {'max': '1000px'},
        'csm': {'max': '600px'},
        'xsm': {'max': '300px'},
      },
      width: {
        '100r': '100rem',
        '50r': '50rem',
        '15r': '15rem',
        '10r': '10rem',
        '70r': '70rem',
        '40r': '40rem',
        '30r': '30rem',
      },
      fontFamily: {
        'ruby' : ['Rubik']
      },
      backgroundImage: {
        'desktopBack' : "url('/src/images/pattern-bg-desktop.png')",
      }
    },
  },
  plugins: [],
}

