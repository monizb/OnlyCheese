<template>
    <div class='phone-body'>
        <div class='width-80-centered'>
            <div class='container' v-if='error !== null'>
                <div class='notification is-danger'>
                    <button class='delete' @click="error = null"></button>
                    {{ error }}
                </div>
                <br>
            </div>

            <div class='field'>
                <label class='label'>Email</label>
                <div class='control has-icons-left'>
                    <input class='input is-rounded' placeholder='john@doe.com' v-model='email' type='email' />
                    <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                    </span>
                </div>
            </div>
            <div class='field'>
                <label class='label'>Password</label>
                <div class='control has-icons-left'>
                    <input class='input is-rounded' placeholder='******' v-model='password' type='password' />
                    <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                    </span>
                </div>
            </div>
            <div class='field is-grouped'>
                <div class='control'>
                    <button class='button is-primary' @click='login'>Log in</button>
                </div>
                <div class='control'>
                    <button class='button is-light' @click='signup'>Sign up</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
            error: null,
        };
    },
    methods: {
        login() {
            this.$store.dispatch('login', {
                email: this.email,
                password: this.password,
                on_error: error => {
                    this.error = error;
                },
            });
        },
        signup() {
            this.$router.push({ name: 'signup', });
        },
    },
};
</script>

<style lang='scss' src='../styles/phone-body.scss'>
</style>