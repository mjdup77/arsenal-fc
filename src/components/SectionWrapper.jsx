import { useInView } from '../hooks/useInView';

export default function SectionWrapper({ id, children, className = '' }) {
  const [ref, isInView] = useInView();

  return (
    <section
      id={id}
      ref={ref}
      className={`py-20 px-6 md:px-12 lg:px-20 ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
      }}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
