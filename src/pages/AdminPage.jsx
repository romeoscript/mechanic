import React, { useState } from 'react';
import { useLoadScript, Autocomplete } from '@react-google-maps/api';
import toast from 'react-hot-toast';

const AdminPage = () => {
  const [formData, setFormData] = useState({
    shopName: '',
    ownerName: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    latitude: null,
    longitude: null
  });

  // Load Google Maps script
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBQcXOQ98ZheEx_5BJ5R2_n_JhBtN-ScW8",
    libraries: ["places"]
  });

  // Handle place selection
  const handlePlaceSelect = (place) => {
    if (place.geometry) {
      setFormData(prev => ({
        ...prev,
        address: place.formatted_address,
        latitude: place.geometry.location.lat(),
        longitude: place.geometry.location.lng(),
        city: place.address_components.find(component => 
          component.types.includes('locality'))?.long_name || '',
        state: place.address_components.find(component => 
          component.types.includes('administrative_area_level_1'))?.long_name || ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5001/mechanics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Mechanic shop registered successfully!');
        setFormData({
          shopName: '',
          ownerName: '',
          phone: '',
          address: '',
          city: '',
          state: '',
          latitude: null,
          longitude: null
        });
      } else {
        toast.error(data.message || 'Registration failed');
      }
    } catch (error) {
      toast.error('Error registering mechanic shop');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Register Mechanic Shop</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Shop Name</label>
            <input
              type="text"
              name="shopName"
              value={formData.shopName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Owner Name</label>
            <input
              type="text"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <Autocomplete
              onLoad={(autocomplete) => {
                autocomplete.addListener('place_changed', () => {
                  const place = autocomplete.getPlace();
                  handlePlaceSelect(place);
                });
              }}
            >
              <input
                type="text"
                placeholder="Search for location"
                className="w-full p-2 border rounded"
                required
              />
            </Autocomplete>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>

        {formData.latitude && formData.longitude && (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Latitude</label>
              <input
                type="text"
                value={formData.latitude}
                className="w-full p-2 border rounded bg-gray-100"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Longitude</label>
              <input
                type="text"
                value={formData.longitude}
                className="w-full p-2 border rounded bg-gray-100"
                readOnly
              />
            </div>
          </div>
        )}

        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
          disabled={!formData.latitude || !formData.longitude}
        >
          Register Shop
        </button>
      </form>
    </div>
  );
};

export default AdminPage;