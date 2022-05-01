<template>
  <div class="container">
    <signinNavVue />
    <div class="row mt-5">
      <div class="col">
        <main class="form-signin">
            <authenticator :login-mechanisms="['email']">
                <template v-slot="{ user, signOut }">
                <h1>Hello {{ user.givenname }}!</h1>
                <button @click="signOut">Sign Out</button>
                </template>
            </authenticator>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import signinNavVue from "@/components/navigation/signinNav.vue";
import { Authenticator } from "@aws-amplify/ui-vue";

</script>
