import EarningsContent from '@/components/dashboard/EarningsContent';
import { getEarningsData } from '@/actions/serverData/dashbordApi';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';

export default async function EarningsPage() {
    const session = await getServerSession(authOptions);
    const earningsData = await getEarningsData(session?.user?.email);
    console.log(earningsData);
    
    return <EarningsContent 
        serviceChartData={earningsData.serviceChartData}
        caregiverChartData={earningsData.caregiverChartData}
        recentServices={earningsData.recentServices}
        recentCaregivers={earningsData.recentCaregivers}
    />;
}
