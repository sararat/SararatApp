<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary" class="flex items-center">

        <!-- Back -->
        <ion-buttons slot="start" v-if="showBack">
          <ion-back-button default-href="/" />
        </ion-buttons>

        <!-- Title -->
        <ion-title class="text-center flex-1">{{ title }}</ion-title>

        <!-- Header Right Buttons -->
        <slot name="header-end"></slot>
      </ion-toolbar>
    </ion-header>

    <ion-content class="p-4">

      <!-- Main content center -->
      <div class="flex flex-col items-center justify-center text-center min-h-[70vh]">
        <slot></slot>
      </div>

      <!-- Actions Slot (ปุ่มยืม–คืน) -->
      <div class="mt-6">
        <slot name="actions"></slot>
      </div>

    </ion-content>

  </ion-page>
</template>

<script>
import {
  IonPage, IonHeader, IonToolbar, IonTitle,
  IonButtons, IonBackButton, IonContent
} from "@ionic/vue";

export default {
  name: "BaseLayout",
  components: {
    IonPage, IonHeader, IonToolbar, IonTitle,
    IonButtons, IonBackButton, IonContent
  },
  props: {
    title: String,
    showBack: Boolean
  }
};
</script>
