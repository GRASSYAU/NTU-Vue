<template>
  <div>
    <!-- AboutTopic -->
    <div class="row mb-5">
      <div :class="['col-md-4', { 'order-md-2': reverse }]">
        <img
          class="w-100"
          :src="require(`@/assets/images/${image}`)"
          :alt="title"
        />
      </div>
      <div :class="['col-md-8', { 'order-md-1': reverse }]">
        <h3>{{ title ? title : "預設標題" }}</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed sapiente
          quia est facere asperiores numquam eveniet dicta voluptatibus?
          Consectetur perferendis necessitatibus, dicta nihil nobis corrupti et?
          Porro mollitia tempora quisquam quia veniam! Enim nobis qui, ab et
          odio eligendi maiores illo. Dolorum corporis cumque vel ipsam
          recusandae, at fuga maxime!
        </p>
      </div>
    </div>
    <!-- AboutTopic end -->
  </div>
</template>
<script>
export default {
  name: "AboutTopic",
  props: ["title", "image", "reverse"],
};
</script>