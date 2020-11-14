<template>
  <div>
    <!-- Header -->
    <header class="jumbotron">
      <div class="container">
        <h1>About</h1>
        <p>
          Culpa id, sit qui doloremque reiciendis. Cumque porro unde est maxime
          magnam hic itaque quae, accusantium aliquam quas, quasi voluptates? In
          veritatis ipsam rerum esse reprehenderit, sint voluptates.
        </p>
      </div>
    </header>
    <!-- Header end -->
    <!-- Section -->
    <section class="py-5">
      <div class="container">
        <div class="section-title-group">
          <h2 class="section-title text-center">Topics</h2>
          <div class="section-title-bar bg-warning"></div>
        </div>

        <!-- AboutTopic -->
        <AboutTopic title="Story" image="topic_1.jpg" />
        <!-- AboutTopic end -->
        <!-- AboutTopic -->
        <AboutTopic title="Team" image="topic_2.jpg" :reverse="true" />
        <!-- AboutTopic end -->
        <!-- AboutTopic -->
        <AboutTopic title="Projects" image="topic_3.jpg" />
        <!-- AboutTopic end -->
        <!-- AboutTopic -->
        <AboutTopic title="Contact" image="topic_4.jpg" :reverse="true" />
        <!-- AboutTopic end -->
      </div>
    </section>
    <!-- Section end -->
  </div>
</template>
<script>
export default {
  name: "AboutPage",
};
</script>