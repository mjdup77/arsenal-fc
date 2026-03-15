import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ExecutiveSummary from './components/ExecutiveSummary';
import AttendanceAnalysis from './components/AttendanceAnalysis';
import SocialEngagement from './components/SocialEngagement';
import CommercialIntelligence from './components/CommercialIntelligence';
import ForecastingModel from './components/ForecastingModel';
import Recommendations from './components/Recommendations';
import Methodology from './components/Methodology';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-surface-50">
      <Navigation />
      <Hero />
      <ExecutiveSummary />
      <AttendanceAnalysis />
      <SocialEngagement />
      <CommercialIntelligence />
      <ForecastingModel />
      <Recommendations />
      <Methodology />
      <Footer />
    </div>
  );
}
