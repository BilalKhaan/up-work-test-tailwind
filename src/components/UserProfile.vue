<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-12">
        <ul role="list" class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
          <li>
            <div class="space-y-4">
              <div class="aspect-w-3 aspect-h-2">
                <img class="rounded-lg object-cover shadow-lg" :src="person.avatar" alt="" />
              </div>
              <div class="space-y-2">
                <div class="space-y-1 text-lg font-medium leading-6">
                  <h3>{{ person.name }}</h3>
                  <p class="text-indigo-600">{{ person.email }}</p>
                  <h4 class="text-indigo-600">{{ person.company.name }}</h4>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div>
    <button class="bg-blue-500 text-white rounded p-4" @click="$emit('show-form')"> Go Back </button>
  </div>
</template>

<script>
export default {
  props: {
    person: {
      type: Object,
      default: () => {}
    }
  }
}
</script>