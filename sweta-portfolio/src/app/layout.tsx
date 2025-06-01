import LayoutWrapper from "../components/LayoutWrapper";

export const metadata = {
  title: 'Sweta Mishra | Full Stack Developer',
  description: 'Portfolio of Sweta Mishra — Full Stack Developer, Creative Technologist, and Mentor.',
  keywords: ['Sweta Mishra', 'Full Stack Developer', 'React', 'Spring Boot', 'OpenFin', 'Mentor', 'Creative Technologist'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}