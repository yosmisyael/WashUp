"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";

export default function OrderTrackingPage() {
  return (
    <section className="min-h-screen w-full bg-gray-50 py-10 px-6">
      <div className="w-full max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Order Tracking</h1>
            <p className="text-sm text-gray-500">
              Track your order progress in real-time
            </p>
          </div>
          <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700 font-medium self-start sm:self-center">
            In Progress
          </span>
        </div>

        {/* Order Info */}
        <div className="text-sm text-gray-600">
          <p>
            <span className="font-semibold">Order #WU-2024-001</span> • Placed on
            March 15, 2024 at 2:30 PM
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Progress */}
          <Card className="lg:col-span-2 shadow-sm border rounded-xl">
            <CardHeader>
              <CardTitle>Order Progress</CardTitle>
            </CardHeader>
            <CardContent className="relative pb-6">
              <div className="relative border-l-2 border-gray-200 ml-4 space-y-10">
                {/* Step 1 */}
                <div className="relative pl-8">
                  <div className="absolute left-[-13px] top-1 w-5 h-5 rounded-full bg-blue-600 border-2 border-white"></div>
                  <h3 className="font-semibold text-gray-800">Order Accepted</h3>
                  <p className="text-sm text-gray-500">
                    March 15, 2024 at 2:35 PM
                  </p>
                  <p className="text-sm text-gray-600">
                    Your order has been confirmed and accepted
                  </p>
                </div>

                {/* Step 2 */}
                <div className="relative pl-8">
                  <div className="absolute left-[-13px] top-1 w-5 h-5 rounded-full bg-blue-600 border-2 border-white"></div>
                  <h3 className="font-semibold text-gray-800">
                    On the way to pick up
                  </h3>
                  <p className="text-sm text-gray-500">
                    March 15, 2024 at 3:00 PM
                  </p>
                  <p className="text-sm text-gray-600">
                    Our driver is heading to your pickup location
                  </p>
                </div>

                {/* Step 3 */}
                <div className="relative pl-8">
                  <div className="absolute left-[-13px] top-1 w-5 h-5 rounded-full bg-blue-500 border-2 border-white animate-pulse"></div>
                  <h3 className="font-semibold text-gray-800">In Progress</h3>
                  <p className="text-sm text-gray-500">Currently processing...</p>
                  <p className="text-sm text-gray-600">
                    Your laundry is being processed at our facility
                  </p>
                </div>

                {/* Step 4 */}
                <div className="relative pl-8 opacity-60">
                  <div className="absolute left-[-13px] top-1 w-5 h-5 rounded-full bg-gray-300 border-2 border-white"></div>
                  <h3 className="font-semibold text-gray-800">
                    Processing Complete
                  </h3>
                  <p className="text-sm text-gray-600">
                    Your laundry will be ready for delivery
                  </p>
                </div>

                {/* Step 5 */}
                <div className="relative pl-8 opacity-60">
                  <div className="absolute left-[-13px] top-1 w-5 h-5 rounded-full bg-gray-300 border-2 border-white"></div>
                  <h3 className="font-semibold text-gray-800">
                    Out for Delivery
                  </h3>
                  <p className="text-sm text-gray-600">
                    Your clean laundry is on the way
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right Column */}
          <div className="space-y-4">
            {/* Order Details */}
            <Card className="shadow-sm border rounded-xl">
              <CardHeader>
                <CardTitle>Order Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-gray-700">
                <div>
                  <p className="font-semibold">Pickup Location</p>
                  <p>123 Main Street, Apt 4B</p>
                  <p>Brooklyn, NY 11225</p>
                </div>
                <div>
                  <p className="font-semibold">Delivery Location</p>
                  <p>128 Willow Street, Apt 4B</p>
                  <p>Queens, NY 11426</p>
                </div>
                <div>
                  <p className="font-semibold">Expected Delivery</p>
                  <p>March 16, 2024 between 2:00 PM - 5:00 PM</p>
                </div>
              </CardContent>
            </Card>

            {/* Item Summary */}
            <Card className="shadow-sm border rounded-xl">
              <CardHeader>
                <CardTitle>Item Summary</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <p>Wash & Fold</p>
                    <p>$15.00</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Dry Cleaning (2 shirts)</p>
                    <p>$24.00</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Express Service</p>
                    <p>$8.00</p>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between font-semibold">
                    <p>Total</p>
                    <p>$47.00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Status */}
            <Card className="shadow-sm border rounded-xl">
              <CardHeader>
                <CardTitle>Payment Status</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-2">
                <div className="flex justify-between">
                  <p>Invoice Total</p>
                  <p className="font-semibold">$47.00</p>
                </div>
                <div className="flex justify-between">
                  <p>Payment Status</p>
                  <p className="text-green-600 font-semibold">Paid</p>
                </div>
                <div className="flex justify-between">
                  <p>Payment Method</p>
                  <p>Credit Card ****1234</p>
                </div>
              </CardContent>
            </Card>

            {/* Support */}
            <Card className="bg-blue-50 border-blue-100 rounded-xl">
              <CardContent className="text-center p-6 space-y-3">
                <p className="text-gray-700 text-sm leading-relaxed">
                  Contact our support team if you have any questions about your
                  order.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full py-3 rounded-full text-sm font-semibold">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
