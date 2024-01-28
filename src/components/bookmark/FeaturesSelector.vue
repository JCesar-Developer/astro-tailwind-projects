<script lang="ts">
import { type Ref, ref } from 'vue';
import { type Feature, features } from '../../data/bookmark.data';

export default {
  props: {
    features: {
      type: Array as () => Feature[],
      required: true,
    }
  },

  setup( props ) {
    let activeFeature: Ref<string> = ref( props.features[0].name );
    let activeArticle: Ref<string> = ref( props.features[0].name );

    const toggleFeature = (featureName: string) => {
      activeFeature.value = featureName;
      activeArticle.value = featureName;
    };

    return {
      features,
      activeFeature,
      activeArticle,
      toggleFeature,
    };
  }
}
</script>

<template>

    <!-- feature-selector -->
    <nav class="max-w-xl mx-auto md:border-b">
      <div class="flex flex-row justify-center gap-5 md:justify-between md:gap-0">
  
        <!-- feature-selector-icon -->
        <button
          v-for="feature in features"
          class="feature-selector-icon md:hidden"
          :class="{ 'active': feature.name === activeFeature }"
          @click="toggleFeature(feature.name)"
        >
          <img 
            :src="feature.icon" 
            :alt="feature.name"
          >
        </button>

        <!-- feature-selector-title -->
        <button 
          v-for="feature in features"
          class="hidden feature-selector-item md:block"
          :class="{ 'active': feature.name === activeFeature }"
          @click="toggleFeature(feature.name)"
        >
          <p>{{ feature.name }}</p>
        </button>
      </div>
    </nav>
    
    <!-- Features -->
    <template v-for="feature in features">
      <article 
        :id="feature.name"
        :class="{ 'active': feature.name === activeArticle }" 
        class="mt-8 hidden md:mt-12"
      >
        <div class="container flex flex-col mx-auto max-w-6xl gap-10
        md:flex-row lg:gap-28">
    
          <!-- feature-image -->
          <div class="md:w-1/2">
            <img :src="feature.content.image" :alt="feature.name">
          </div>
          
          <!-- feature-description -->
          <div class="md:w-1/2 text-center md:text-left space-y-8">
            <h1 class="text-3xl font-semibold">
              {{ feature.content.title }}
            </h1>
            <p class="text-[--grayishBlue] md:max-w-md">
              {{ feature.content.description }}
            </p>
            <!-- button -->
            <div>
              <slot name="button" />
            </div>
          </div>
    
        </div>
      </article>
    </template>

</template>

  

<style lang="postcss">
.feature-selector-item {
  @apply w-40 py-5 capitalize text-center text-gray-800 hover:text-[--softRed];
}
.feature-selector-item.active {
  @apply border-b-4 border-[--softRed];
}


.feature-selector-icon {
  @apply w-16 opacity-50;
}
.feature-selector-icon.active {
  filter: brightness(0) saturate(100%) invert(57%) sepia(35%) saturate(7351%) hue-rotate(330deg) brightness(108%) contrast(97%);
  @apply opacity-100;
}


article.active {
  @apply block;
}
</style>