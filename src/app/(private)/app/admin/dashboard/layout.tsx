import { Divider } from 'antd';
import StatsComponent from './_components/stats/stats.component';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <section>
        <div className='p-5 pb-0'>
          <h1 className='text-xl font-semibold'>Dashboard</h1>
        </div>
        <Divider />
      </section>
      <StatsComponent />
      <section>{children}</section>
    </>
  );
}
