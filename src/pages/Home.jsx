import AboutSection from "../Components/AboutSection"
import HeroSection from "../Components/HeroSection"
import Navbar from "../Components/Navbar"
import ProjectsSection from "../Components/ProjectsSection"
import SkillsSection from "../Components/SkillsSection"
import StarBackground from "../Components/StarBackground"
import ThemeToggle from "../Components/ThemeToggle"

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}

      <ThemeToggle />

      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}

      <Navbar />

      {/* Main Content */}

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
      </main>

      {/* Footer */}
    </div>
  )
}

export default Home
