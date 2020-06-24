<template>
  <div>
    <div class="page-title">
      <h3>
        {{ 'ProfileTitle' | localize }}
      </h3>
    </div>

    <form class="form" @submit.prevent="submitHandler">
      <div class="input-field">
        <input
          id="description"
          type="text"
          v-model="name"
          :class="{
            invalid: $v.name.$dirty && !$v.name.required
          }"
        />
        <label for="description">{{ 'Name' | localize }}</label>
        <span
          v-if="$v.name.$dirty && !$v.name.required"
          class="helper-text invalid"
          >{{ 'NameValidation' | localize }}</span
        >
      </div>

      <div class="switch">
        <label>
          English
          <input type="checkbox" v-model="isRuLocale" />
          <span class="lever"></span>
          Русский
        </label>
      </div>

      <button class="btn waves-effect waves-light" type="submit">
        {{ 'Refresh' | localize }}
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import { mapGetters, mapActions } from 'vuex'
export default {
  data: () => ({
    name: '',
    isRuLocale: true
  }),
  mounted() {
    this.name = this.info.name
    this.isRuLocale = this.info.locale === 'ru-RU'
    setTimeout(() => {
      window.M.updateTextFields()
    })
  },
  computed: {
    ...mapGetters(['info'])
  },
  validations: {
    name: { required }
  },
  methods: {
    ...mapActions(['updateInfo']),
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      try {
        await this.updateInfo({
          name: this.name,
          locale: this.isRuLocale ? 'ru-RU' : 'en-US'
        })
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.switch {
  margin-bottom: 2rem;
}
</style>
