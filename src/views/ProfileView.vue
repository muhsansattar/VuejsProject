<template>
  <div>
    <!-- Button to open modal -->
    <button @click="openModal" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Open Modal</button>
    
    <!-- Modal -->
    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white rounded-lg p-8 max-w-screen-lg w-full h-full overflow-auto">
        <!-- Modal content -->
        <div>
          <h2 class="text-xl font-semibold mb-4">Modal Title</h2>
          <p class="text-gray-700 mb-6">Modal content goes here.</p>
          <div class="flex justify-end">
            <button @click="closeModal"
                    class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    }
  }
};
</script>

<style>
/* Add any additional styles here */
</style>
