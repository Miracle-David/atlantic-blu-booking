import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Users, Minus, Plus } from "lucide-react";
import { format } from "date-fns";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Booking = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const selectedRoom = {
    name: "Ocean View Suite",
    price: 299,
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
  };

  const calculateNights = () => {
    if (checkIn && checkOut) {
      const diff = checkOut.getTime() - checkIn.getTime();
      return Math.ceil(diff / (1000 * 60 * 60 * 24));
    }
    return 0;
  };

  const nights = calculateNights();
  const roomTotal = selectedRoom.price * nights;
  const taxesAndFees = roomTotal * 0.15;
  const total = roomTotal + taxesAndFees;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="pt-24 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-12">
            Complete Your Booking
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Booking Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Dates and Guests */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-playfair">Stay Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Check-in Date */}
                  <div>
                    <Label htmlFor="check-in" className="font-inter">
                      Check-in Date
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-inter mt-2"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkIn ? format(checkIn, "PPP") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-card z-50">
                        <Calendar mode="single" selected={checkIn} onSelect={setCheckIn} />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Check-out Date */}
                  <div>
                    <Label htmlFor="check-out" className="font-inter">
                      Check-out Date
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-inter mt-2"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkOut ? format(checkOut, "PPP") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-card z-50">
                        <Calendar mode="single" selected={checkOut} onSelect={setCheckOut} />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Guests */}
                  <div>
                    <Label className="font-inter mb-3 block">Guests</Label>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-inter font-medium">Adults</div>
                          <div className="text-sm text-muted-foreground">Age 13+</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => setAdults(Math.max(1, adults - 1))}
                          >
                            <Minus size={16} />
                          </Button>
                          <span className="w-8 text-center font-inter">{adults}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => setAdults(adults + 1)}
                          >
                            <Plus size={16} />
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-inter font-medium">Children</div>
                          <div className="text-sm text-muted-foreground">Age 0-12</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => setChildren(Math.max(0, children - 1))}
                          >
                            <Minus size={16} />
                          </Button>
                          <span className="w-8 text-center font-inter">{children}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => setChildren(children + 1)}
                          >
                            <Plus size={16} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Guest Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-playfair">Guest Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="first-name" className="font-inter">
                        First Name
                      </Label>
                      <Input id="first-name" placeholder="John" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="last-name" className="font-inter">
                        Last Name
                      </Label>
                      <Input id="last-name" placeholder="Doe" className="mt-2" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className="font-inter">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="font-inter">
                      Phone Number
                    </Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="special-requests" className="font-inter">
                      Special Requests (Optional)
                    </Label>
                    <Input
                      id="special-requests"
                      placeholder="Early check-in, late check-out, etc."
                      className="mt-2"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Booking Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="font-playfair">Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Room Preview */}
                  <div>
                    <div
                      className="h-32 rounded-lg bg-cover bg-center mb-3"
                      style={{ backgroundImage: `url('${selectedRoom.image}')` }}
                    ></div>
                    <h3 className="font-playfair font-semibold text-lg">{selectedRoom.name}</h3>
                  </div>

                  {/* Stay Details */}
                  {checkIn && checkOut && (
                    <div className="space-y-2 font-inter text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Check-in:</span>
                        <span className="font-medium">{format(checkIn, "MMM d, yyyy")}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Check-out:</span>
                        <span className="font-medium">{format(checkOut, "MMM d, yyyy")}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Nights:</span>
                        <span className="font-medium">{nights}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Guests:</span>
                        <span className="font-medium">
                          {adults} adult{adults > 1 ? "s" : ""}
                          {children > 0 && `, ${children} child${children > 1 ? "ren" : ""}`}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Price Breakdown */}
                  {nights > 0 && (
                    <div className="space-y-2 pt-4 border-t border-border">
                      <div className="flex justify-between font-inter text-sm">
                        <span className="text-muted-foreground">
                          ${selectedRoom.price} × {nights} nights
                        </span>
                        <span className="font-medium">${roomTotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between font-inter text-sm">
                        <span className="text-muted-foreground">Taxes & fees</span>
                        <span className="font-medium">${taxesAndFees.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between font-playfair text-xl font-bold pt-2 border-t border-border">
                        <span>Total</span>
                        <span className="text-primary">${total.toFixed(2)}</span>
                      </div>
                    </div>
                  )}

                  <Button className="w-full" size="lg" disabled={!checkIn || !checkOut}>
                    Complete Booking
                  </Button>

                  <p className="text-xs text-muted-foreground text-center font-inter">
                    Free cancellation up to 48 hours before check-in
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Booking;
