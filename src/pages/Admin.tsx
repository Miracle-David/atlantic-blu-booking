import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Hotel, Calendar, Settings } from "lucide-react";
import Header from "@/components/Header";

const Admin = () => {
  // Mock data - will be replaced with real data from backend
  const rooms = [
    { id: 1, name: "Signature Suite", price: 299, status: "Available", bookings: 12 },
    { id: 2, name: "Deluxe King Room", price: 199, status: "Available", bookings: 8 },
    { id: 3, name: "Beachfront Villa", price: 499, status: "Occupied", bookings: 6 },
  ];

  const bookings = [
    {
      id: 1,
      guest: "John Doe",
      room: "Signature Suite",
      checkIn: "2024-03-15",
      checkOut: "2024-03-20",
      status: "Confirmed",
    },
    {
      id: 2,
      guest: "Jane Smith",
      room: "Deluxe King Room",
      checkIn: "2024-03-18",
      checkOut: "2024-03-22",
      status: "Confirmed",
    },
    {
      id: 3,
      guest: "Bob Johnson",
      room: "Beachfront Villa",
      checkIn: "2024-03-10",
      checkOut: "2024-03-25",
      status: "Checked In",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <div className="pt-24 pb-16 flex-1">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-playfair font-bold mb-2">Admin Dashboard</h1>
            <p className="font-inter text-muted-foreground">
              Manage your hotel operations efficiently
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-inter text-sm text-muted-foreground mb-1">Total Rooms</p>
                    <p className="text-3xl font-playfair font-bold">24</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Hotel className="text-primary" size={24} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-inter text-sm text-muted-foreground mb-1">
                      Active Bookings
                    </p>
                    <p className="text-3xl font-playfair font-bold">18</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Calendar className="text-accent" size={24} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-inter text-sm text-muted-foreground mb-1">Occupancy Rate</p>
                    <p className="text-3xl font-playfair font-bold">75%</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Settings className="text-primary" size={24} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-inter text-sm text-muted-foreground mb-1">
                      Monthly Revenue
                    </p>
                    <p className="text-3xl font-playfair font-bold">$45K</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-accent font-bold">$</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="rooms" className="space-y-6">
            <TabsList>
              <TabsTrigger value="rooms">Rooms</TabsTrigger>
              <TabsTrigger value="bookings">Bookings</TabsTrigger>
              <TabsTrigger value="amenities">Amenities</TabsTrigger>
            </TabsList>

            {/* Rooms Tab */}
            <TabsContent value="rooms">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="font-playfair">Manage Rooms</CardTitle>
                  <Button>
                    <Plus size={16} className="mr-2" />
                    Add Room
                  </Button>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-inter">Room Name</TableHead>
                        <TableHead className="font-inter">Price/Night</TableHead>
                        <TableHead className="font-inter">Status</TableHead>
                        <TableHead className="font-inter">Total Bookings</TableHead>
                        <TableHead className="font-inter text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {rooms.map((room) => (
                        <TableRow key={room.id}>
                          <TableCell className="font-inter font-medium">{room.name}</TableCell>
                          <TableCell className="font-inter">${room.price}</TableCell>
                          <TableCell>
                            <Badge
                              variant={room.status === "Available" ? "default" : "secondary"}
                            >
                              {room.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="font-inter">{room.bookings}</TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button variant="ghost" size="icon">
                                <Edit size={16} />
                              </Button>
                              <Button variant="ghost" size="icon">
                                <Trash2 size={16} />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Bookings Tab */}
            <TabsContent value="bookings">
              <Card>
                <CardHeader>
                  <CardTitle className="font-playfair">Manage Bookings</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-inter">Guest Name</TableHead>
                        <TableHead className="font-inter">Room</TableHead>
                        <TableHead className="font-inter">Check-in</TableHead>
                        <TableHead className="font-inter">Check-out</TableHead>
                        <TableHead className="font-inter">Status</TableHead>
                        <TableHead className="font-inter text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {bookings.map((booking) => (
                        <TableRow key={booking.id}>
                          <TableCell className="font-inter font-medium">{booking.guest}</TableCell>
                          <TableCell className="font-inter">{booking.room}</TableCell>
                          <TableCell className="font-inter">{booking.checkIn}</TableCell>
                          <TableCell className="font-inter">{booking.checkOut}</TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                booking.status === "Checked In" ? "default" : "secondary"
                              }
                            >
                              {booking.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button variant="ghost" size="icon">
                                <Edit size={16} />
                              </Button>
                              <Button variant="ghost" size="icon">
                                <Trash2 size={16} />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Amenities Tab */}
            <TabsContent value="amenities">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="font-playfair">Manage Amenities</CardTitle>
                  <Button>
                    <Plus size={16} className="mr-2" />
                    Add Amenity
                  </Button>
                </CardHeader>
                <CardContent>
                  <p className="font-inter text-muted-foreground text-center py-8">
                    Amenity management interface will be implemented with backend integration
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Admin;
