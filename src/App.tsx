
import './App.css'

function App() {
  return (
    <div className="website">
      <nav className="navbar">
        <a href="#" className="brand">
          <span className="brand-icon">M</span>
          <span>MUScholix<span className="brand-dot">.</span></span>
        </a>

        <div className="nav-links">
          <a href="#home" className="active">Home</a>
          <a href="#explore">Explore Notes</a>
          <a href="#community">Community</a>
          <a href="#about">About</a>
        </div>

        <div className="nav-actions">
          <button className="login-btn">Log in</button>
          <button className="signup-btn">Get Started <span>→</span></button>
        </div>
      </nav>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-content">
            <div className="announcement">
              <span className="announcement-dot"></span>
              A learning community built by students
            </div>

            <h1>
              Learn Beyond<br />
              the <span>Lecture.</span>
            </h1>

            <p className="hero-description">
              Your academic journey, made easier. Discover study materials,
              share knowledge, and grow together with a community of learners.
            </p>

            <div className="hero-actions">
              <a href="#explore" className="primary-btn">
                Explore Resources <span>→</span>
              </a>
              <a href="#community" className="secondary-btn">
                Discover Community
              </a>
            </div>

            <div className="hero-trust">
              <div className="avatar-stack">
                <span>J</span><span>A</span><span>S</span><span>M</span>
              </div>
              <p><strong>Learn together.</strong> Grow together.</p>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow"></div>
            <div className="visual-card main-card">
              <div className="card-top">
                <div>
                  <span className="small-label">YOUR LEARNING SPACE</span>
                  <h3>Study smarter.</h3>
                </div>
                <span className="card-symbol">✳</span>
              </div>

              <div className="study-preview">
                <div className="preview-icon purple">PDF</div>
                <div className="preview-info">
                  <strong>Data Structures</strong>
                  <span>Lecture Notes · CSE</span>
                </div>
                <span className="preview-arrow">↗</span>
              </div>

              <div className="study-preview">
                <div className="preview-icon blue">DOC</div>
                <div className="preview-info">
                  <strong>Database Systems</strong>
                  <span>Study Guide · CSE</span>
                </div>
                <span className="preview-arrow">↗</span>
              </div>

              <div className="study-preview">
                <div className="preview-icon orange">PDF</div>
                <div className="preview-info">
                  <strong>English Composition</strong>
                  <span>Class Notes · General</span>
                </div>
                <span className="preview-arrow">↗</span>
              </div>

              <div className="card-bottom">
                <span className="status-dot"></span>
                Your next learning opportunity awaits.
              </div>
            </div>

            <div className="floating-note note-one">
              <span className="float-icon">✦</span>
              <div><strong>Share knowledge</strong><small>Help others learn</small></div>
            </div>

            <div className="floating-note note-two">
              <span className="float-icon blue-float">↗</span>
              <div><strong>Grow together</strong><small>Learn as a community</small></div>
            </div>
          </div>
        </section>

        <section className="feature-strip">
          <div><span>01</span> Discover Resources</div>
          <div><span>02</span> Share Knowledge</div>
          <div><span>03</span> Connect & Grow</div>
        </section>

        <section className="explore-section" id="explore">
          <div className="section-heading">
            <div>
              <span className="eyebrow">YOUR LEARNING STARTS HERE</span>
              <h2>Explore academic resources.</h2>
              <p>Find the right material for every step of your academic journey.</p>
            </div>
            <a href="#explore" className="text-link">Explore all resources →</a>
          </div>

          <div className="category-grid">
            <article className="category-card">
              <div className="category-icon purple-bg">▤</div>
              <h3>Lecture Notes</h3>
              <p>Organized notes and materials shared by students and teachers.</p>
              <span>Explore notes →</span>
            </article>

            <article className="category-card">
              <div className="category-icon blue-bg">▧</div>
              <h3>Study Guides</h3>
              <p>Helpful summaries and guides to understand your courses.</p>
              <span>Explore guides →</span>
            </article>

            <article className="category-card">
              <div className="category-icon orange-bg">✎</div>
              <h3>Practice Materials</h3>
              <p>Practice questions and solved problems to support your learning.</p>
              <span>Start practicing →</span>
            </article>

            <article className="category-card">
              <div className="category-icon green-bg">▣</div>
              <h3>Teacher Resources</h3>
              <p>Class materials and academic resources shared by teachers.</p>
              <span>View resources →</span>
            </article>
          </div>
        </section>

        <section className="community-section" id="community">
          <div>
            <span className="eyebrow light-eyebrow">MORE THAN JUST NOTES</span>
            <h2>Knowledge grows<br />when it's shared.</h2>
            <p>Connect with fellow learners, exchange ideas, help each other, and become part of a supportive academic community.</p>
            <a href="#about" className="community-btn">Discover our community →</a>
          </div>
          <div className="community-art">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="community-center">M</div>
            <span className="orbit-person person-one">J</span>
            <span className="orbit-person person-two">A</span>
            <span className="orbit-person person-three">S</span>
            <span className="orbit-person person-four">R</span>
          </div>
        </section>

        <section className="closing-section" id="about">
          <span className="eyebrow">MUSCHOLIX</span>
          <h2>Your knowledge. Your community.<br /><span>Your growth.</span></h2>
          <p>Learn Beyond the Lecture.</p>
        </section>
      </main>

      <footer className="footer">
        <a href="#" className="brand">
          <span className="brand-icon">M</span>
          <span>MUScholix<span className="brand-dot">.</span></span>
        </a>
        <p>Learn Beyond the Lecture.</p>
        <span className="copyright">© 2026 MUScholix. Built for learners.</span>
      </footer>
    </div>
  )
}

export default App
