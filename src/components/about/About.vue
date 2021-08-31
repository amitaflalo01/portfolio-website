<template>
  <div class="waxon_tm_about" id="about">
    <div class="container">
      <div class="about_inner">
        <!-- End left thumbnail -->
          <div class="name" v-scroll-reveal="{ delay: 40 }">
            <h3>Amit Aflalo<span class="bg">About</span></h3>
            <span class="job">Software Developer</span>
          </div>
          <div class="text">
            <p v-scroll-reveal="{ delay: 60 }">
              My name is Amit Aflalo. I am a Software Developer, and I'm very
              passionate and dedicated to my work.
            </p>
            <p v-scroll-reveal="{ delay: 80 }">
              Highly motivated and always looking forward to learning and investigate new technologies.
              Intuitive, deductive, and self-taught with attention to details and excellent communication skills.
              With 2 years of experience as a professional software developer, I have
              acquired the skills and knowledge necessary to make your project a
              success.
            </p>
          </div>
          <div class="waxon_tm_button" v-scroll-reveal="{ delay: 100 }">
            <button class="ib-button" @click="showModal">
              <span>Learn More</span>
            </button>
          </div>
        <!-- End right content -->
      </div>
    </div>

    <!-- Start Modalbox -->
    <transition name="fade">
      <!-- Modal -->
      <div
        :class="{ 'modal-mask': isActive }"
        id="modal"
        @click="closeModal"
        v-if="isVisible"
      >
        <div
          class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-user"
          @click.stop
        >
          <div class="modal-content">
            <div class="waxon_tm_modalbox_about">
              <div class="close" @click="closeModal">
                <img
                  class="svg"
                  src="../../assets/img/svg/cancel.svg"
                  alt="cancel-img"
                />
              </div>
              <!-- End .close -->
              <div class="my_box">
                <div class="left">
                  <div class="about_title">
                    <h3>Technical Skills</h3>
                  </div>
                  <!-- End .abut_title -->
                  <div class="waxon_progress">
                    <div class="progress_inner">
                      <span
                        ><span class="label">Python & Flask</span
                        ><span class="number">95%</span></span
                      >
                      <div class="background">
                        <div class="bar">
                          <div class="bar_in" style="width:95%"></div>
                        </div>
                      </div>
                    </div>
                    <div class="progress_inner">
                      <span
                      ><span class="label">C, C++ & C#</span
                      ><span class="number">90%</span></span
                      >
                      <div class="background">
                        <div class="bar">
                          <div class="bar_in" style="width:80%"></div>
                        </div>
                      </div>
                    </div>
                    <div class="progress_inner">
                      <span
                      ><span class="label">NoSQL & MongoDB</span
                      ><span class="number">90%</span></span
                      >
                      <div class="background">
                        <div class="bar">
                          <div class="bar_in" style="width:80%"></div>
                        </div>
                      </div>
                    </div>
                    <div class="progress_inner">
                      <span
                      ><span class="label">SQL & PostgreSQL</span
                      ><span class="number">90%</span></span
                      >
                      <div class="background">
                        <div class="bar">
                          <div class="bar_in" style="width:80%"></div>
                        </div>
                      </div>
                    </div>
                    <div class="progress_inner">
                      <span
                      ><span class="label">Node js, Nest js & Express</span
                      ><span class="number">90%</span></span
                      >
                      <div class="background">
                        <div class="bar">
                          <div class="bar_in" style="width:80%"></div>
                        </div>
                      </div>
                    </div>
                    <!-- End progress_inner -->
                    <div class="progress_inner">
                      <span
                        ><span class="label">Javascript &amp; Vue js</span
                        ><span class="number">90%</span></span
                      >
                      <div class="background">
                        <div class="bar">
                          <div class="bar_in" style="width:80%"></div>
                        </div>
                      </div>
                    </div>
                    <!-- End progress_inner -->
                    <div class="progress_inner">
                      <span
                        ><span class="label">HTML &amp; CSS</span
                        ><span class="number">90%</span></span
                      >
                      <div class="background">
                        <div class="bar">
                          <div class="bar_in" style="width:90%"></div>
                        </div>
                      </div>
                    </div>
                    <!-- End progress_inner -->
                  </div>
                  <!-- End .waxon_progress -->
                </div>
                <!-- End .left -->
                <div class="right">
                  <div class="about_title">
                    <h3>Language Skills</h3>
                  </div>
                  <div class="waxon_progress">
                    <div class="progress_inner">
                      <span
                      ><span class="label">Hebrew</span
                      ><span class="number">100%</span></span
                      >
                      <div class="background">
                        <div class="bar">
                          <div class="bar_in" style="width:90%"></div>
                        </div>
                      </div>
                    </div>
                    <div class="progress_inner">
                      <span
                        ><span class="label">English</span
                        ><span class="number">95%</span></span
                      >
                      <div class="background">
                        <div class="bar">
                          <div class="bar_in" style="width:95%"></div>
                        </div>
                      </div>
                    </div>
                    <div class="progress_inner">
                      <span
                        ><span class="label">Spanish</span
                        ><span class="number">60%</span></span
                      >
                      <div class="background">
                        <div class="bar">
                          <div class="bar_in" style="width:85%"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- End .right -->
              </div>
              <div class="counter">
                <div class="about_title">
                  <h3>Certifications</h3>
                </div>
                <ul>
                  <li>
                    <div class="list_inner">
                      <h3>12</h3>
                      <span>Years of High School Education</span>
                    </div>
                  </li>
                  <li>
                    <div class="list_inner">
                      <h3>BSc</h3>
                      <span>Computer Science, Holon Institute of Technology, ISRAEL </span>
                    </div>
                  </li>
                  <li>
                    <div class="list_inner">
                      <h3>96</h3>
                      <span>Final GPA</span>
                    </div>
                  </li>
                </ul>
                <!-- End ul -->
              </div>
              <!-- End .counter -->
            </div>
            <!-- End .tokyo_tm_modalbox_about -->
          </div>
        </div>
      </div>
    </transition>
    <!-- End Modalbox -->
  </div>
  <!-- End about -->
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      isVisible: false,
    };
  },
  methods: {
    showModal: function() {
      this.isActive = true;
      this.isVisible = true;
    },
    closeModal: function() {
      this.isActive = false;
      this.isVisible = false;
    },
  },
};
</script>
