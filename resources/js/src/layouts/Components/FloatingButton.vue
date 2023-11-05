<template>
    
</template>
<script>
import darkLoader from '../../assets/images/darkMode/dark-logo.gif'
import loader from '../../assets/images/logo-wil.png'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'FloatingButton',
  data () {
    return {
      rtl: false,
      dark: false
    }
  },
  computed: {
    ...mapGetters({
      darkMode: 'Setting/darkModeState',
      rtlMode: 'Setting/rtlModeState',
      colors: 'Setting/colorState'
    })
  },
  methods: {
    changeColor (code) {
      document.documentElement.style.setProperty('--iq-primary', code.primary)
      document.documentElement.style.setProperty('--iq-primary-light', code.primaryLight)
      document.documentElement.style.setProperty('--iq-primary-dark', code.primaryDark)
    },
    reset () {
      this.changeColor({
        primary: '#827af3',
        primaryLight: '#b47af3',
        bodyBgLight: '#efeefd',
        bodyBgDark: '#1d203f'
      })
      this.themeMode(false)
      this.rtlChange(false)
    },
    rtlChange (mode) {
      this.rtl = mode
      this.modeChange({ rtl: this.rtl, dark: this.dark })
    },
    darkChange (mode) {
      this.dark = mode
      if (mode) {
        this.logo = darkLoader
      } else {
        this.logo = loader
      }
      this.$emit('onLogo', this.logo)
      this.modeChange({ rtl: this.rtl, dark: this.dark })
    },
    ...mapActions({
      modeChange: 'Setting/layoutModeAction'
    })
  }
}
</script>
