import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default async function Dashboard() {
    const user = await currentUser()

    if (!user) {
        redirect('/sign-in')
    }

    return (
        <div className="min-h-screen p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4">Welcome, {user.firstName || user.emailAddresses[0].emailAddress}!</h2>
                    <p className="text-gray-600 mb-4">
                        This is a protected page that only authenticated users can access.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-blue-900">User ID</h3>
                            <p className="text-blue-700 text-sm">{user.id}</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-green-900">Email</h3>
                            <p className="text-green-700 text-sm">{user.emailAddresses[0].emailAddress}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
