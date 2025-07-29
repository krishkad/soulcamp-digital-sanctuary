import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Users, MapPin, Phone, Mail } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const BookingSection = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState("2");
  const [selectedTent, setSelectedTent] = useState("");
  const [addOns, setAddOns] = useState<string[]>([]);
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const addOnOptions = [
    { id: "spa", name: "In-tent Spa Treatment", price: 2499 },
    { id: "meditation", name: "Private Meditation Session", price: 1999 },
    { id: "dinner", name: "Romantic Candlelit Dinner", price: 3999 },
    { id: "photography", name: "Professional Photo Session", price: 4999 },
    { id: "pickup", name: "Airport Pickup Service", price: 1499 }
  ];

  const tentOptions = [
    { value: "serenity", label: "Serenity Tent (Lake View)", price: 8999 },
    { value: "forest", label: "Forest Whisper (Deep Woods)", price: 7499 },
    { value: "riverside", label: "Riverside Bliss (Premium)", price: 12999 }
  ];

  const handleAddOnChange = (addOnId: string, checked: boolean) => {
    if (checked) {
      setAddOns([...addOns, addOnId]);
    } else {
      setAddOns(addOns.filter(id => id !== addOnId));
    }
  };

  const calculateTotal = () => {
    const selectedTentOption = tentOptions.find(tent => tent.value === selectedTent);
    const basePrice = selectedTentOption ? selectedTentOption.price : 0;
    const addOnTotal = addOns.reduce((total, addOnId) => {
      const addOn = addOnOptions.find(option => option.id === addOnId);
      return total + (addOn ? addOn.price : 0);
    }, 0);
    
    const days = checkIn && checkOut ? Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)) : 1;
    return (basePrice * days) + addOnTotal;
  };

  return (
    <section id="booking" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-5xl font-playfair font-bold text-foreground mb-6">
            Your Soulful Journey <span className="text-accent">Starts Here</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take the first step towards reconnection. Book your transformative retreat 
            and let nature guide you home to yourself.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Booking Form */}
          <Card className="nature-card">
            <CardHeader>
              <CardTitle className="text-2xl font-playfair text-foreground">
                Reserve Your Escape
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Date Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="checkin">Check-in Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !checkIn && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {checkIn ? format(checkIn, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={checkIn}
                        onSelect={setCheckIn}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="checkout">Check-out Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !checkOut && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {checkOut ? format(checkOut, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={checkOut}
                        onSelect={setCheckOut}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              {/* Guests and Tent Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="guests">Number of Guests</Label>
                  <Select value={guests} onValueChange={setGuests}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select guests" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Guest</SelectItem>
                      <SelectItem value="2">2 Guests</SelectItem>
                      <SelectItem value="3">3 Guests</SelectItem>
                      <SelectItem value="4">4 Guests</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tent">Choose Your Tent</Label>
                  <Select value={selectedTent} onValueChange={setSelectedTent}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select tent type" />
                    </SelectTrigger>
                    <SelectContent>
                      {tentOptions.map((tent) => (
                        <SelectItem key={tent.value} value={tent.value}>
                          {tent.label} - ₹{tent.price.toLocaleString()}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Add-ons */}
              <div className="space-y-4">
                <Label>Enhance Your Experience</Label>
                <div className="grid grid-cols-1 gap-3">
                  {addOnOptions.map((addOn) => (
                    <div key={addOn.id} className="flex items-center space-x-3">
                      <Checkbox
                        id={addOn.id}
                        checked={addOns.includes(addOn.id)}
                        onCheckedChange={(checked) => handleAddOnChange(addOn.id, checked as boolean)}
                      />
                      <Label htmlFor={addOn.id} className="flex-1 cursor-pointer">
                        <div className="flex justify-between">
                          <span>{addOn.name}</span>
                          <span className="text-accent font-medium">+₹{addOn.price.toLocaleString()}</span>
                        </div>
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Personal Information */}
              <div className="space-y-4">
                <Label>Contact Information</Label>
                <div className="space-y-3">
                  <Input
                    placeholder="Your Full Name"
                    value={personalInfo.name}
                    onChange={(e) => setPersonalInfo({...personalInfo, name: e.target.value})}
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={personalInfo.email}
                    onChange={(e) => setPersonalInfo({...personalInfo, email: e.target.value})}
                  />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={personalInfo.phone}
                    onChange={(e) => setPersonalInfo({...personalInfo, phone: e.target.value})}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Price Summary */}
          <div className="space-y-6">
            <Card className="nature-card sticky top-24">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-foreground">
                  Booking Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedTent && (
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span>
                      {tentOptions.find(t => t.value === selectedTent)?.label}
                    </span>
                    <span className="font-medium">
                      ₹{tentOptions.find(t => t.value === selectedTent)?.price.toLocaleString()}
                    </span>
                  </div>
                )}

                {addOns.length > 0 && (
                  <div className="space-y-2">
                    {addOns.map((addOnId) => {
                      const addOn = addOnOptions.find(option => option.id === addOnId);
                      return addOn ? (
                        <div key={addOnId} className="flex justify-between items-center text-sm">
                          <span>{addOn.name}</span>
                          <span>₹{addOn.price.toLocaleString()}</span>
                        </div>
                      ) : null;
                    })}
                  </div>
                )}

                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span>Total</span>
                    <span className="text-accent">₹{calculateTotal().toLocaleString()}</span>
                  </div>
                </div>

                <Button className="w-full golden-button text-lg py-6 mt-6">
                  Confirm Booking
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  <p>Secure booking • Free cancellation up to 48 hours</p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="nature-card">
              <CardContent className="p-6">
                <h3 className="font-playfair font-bold text-lg mb-4">Need Help?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-accent" />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-accent" />
                    <span>hello@soulcamp.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span>Himalayan Foothills, Rishikesh</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;