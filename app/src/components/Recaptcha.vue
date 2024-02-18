<template>
  <div></div>
</template>

<script>
export default {
  props: {
    action: {
      type: String,
      default: 'submit',
      required: true
    },
  },
  data() {
    return {
      sitekey: '6Le9GXcpAAAAAEjWrdGSRTq-thN0X8-yNiz4dy71',
    };
  },
  methods: {
    execute() {
      var action = this.$props.action;
      var sitekey = this.sitekey;
      var emit = this.$emit;

      grecaptcha.ready(function() {
        grecaptcha.execute(sitekey, { action: action }).then((token) => {
          emit('verify', token);
        });
      })
    },
    render() {
      this.execute();
    },
  },
};
</script>