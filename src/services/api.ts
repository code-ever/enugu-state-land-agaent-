// API service configuration for Laravel backend
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000/api';

export interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
}

export interface Property {
  id: string;
  title: string;
  type: 'land' | 'house';
  price: number;
  location: string;
  size: string;
  status: 'available' | 'sold' | 'pending';
  images: string[];
  description: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  agent: string;
  agent_contact: string;
  documents: string[];
  created_at: string;
  updated_at: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'buyer' | 'agent' | 'landlord' | 'admin';
  phone: string;
  verified: boolean;
  created_at: string;
}

export interface PropertyFilters {
  type?: 'land' | 'house';
  status?: 'available' | 'sold' | 'pending';
  min_price?: number;
  max_price?: number;
  location?: string;
  size?: string;
}

class ApiService {
  private async makeRequest<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const token = localStorage.getItem('auth_token');
    
    const defaultHeaders: HeadersInit = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    if (token) {
      defaultHeaders.Authorization = `Bearer ${token}`;
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  // Authentication
  async login(email: string, password: string): Promise<ApiResponse<{ user: User; token: string }>> {
    return this.makeRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  async register(userData: Partial<User> & { password: string }): Promise<ApiResponse<{ user: User; token: string }>> {
    return this.makeRequest('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async logout(): Promise<ApiResponse<null>> {
    return this.makeRequest('/auth/logout', {
      method: 'POST',
    });
  }

  // Properties
  async getProperties(filters?: PropertyFilters): Promise<ApiResponse<Property[]>> {
    const params = new URLSearchParams();
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined) {
          params.append(key, value.toString());
        }
      });
    }
    
    const endpoint = params.toString() ? `/properties?${params}` : '/properties';
    return this.makeRequest(endpoint);
  }

  async getProperty(id: string): Promise<ApiResponse<Property>> {
    return this.makeRequest(`/properties/${id}`);
  }

  async createProperty(propertyData: Omit<Property, 'id' | 'created_at' | 'updated_at'>): Promise<ApiResponse<Property>> {
    return this.makeRequest('/properties', {
      method: 'POST',
      body: JSON.stringify(propertyData),
    });
  }

  async updateProperty(id: string, propertyData: Partial<Property>): Promise<ApiResponse<Property>> {
    return this.makeRequest(`/properties/${id}`, {
      method: 'PUT',
      body: JSON.stringify(propertyData),
    });
  }

  async deleteProperty(id: string): Promise<ApiResponse<null>> {
    return this.makeRequest(`/properties/${id}`, {
      method: 'DELETE',
    });
  }

  // File uploads
  async uploadFile(file: File, type: 'image' | 'document'): Promise<ApiResponse<{ url: string }>> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', type);

    const token = localStorage.getItem('auth_token');
    const headers: HeadersInit = {};
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const response = await fetch(`${API_BASE_URL}/upload`, {
      method: 'POST',
      headers,
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Upload failed! status: ${response.status}`);
    }

    return response.json();
  }

  // User profile
  async getProfile(): Promise<ApiResponse<User>> {
    return this.makeRequest('/user/profile');
  }

  async updateProfile(userData: Partial<User>): Promise<ApiResponse<User>> {
    return this.makeRequest('/user/profile', {
      method: 'PUT',
      body: JSON.stringify(userData),
    });
  }

  // Favorites
  async getFavorites(): Promise<ApiResponse<Property[]>> {
    return this.makeRequest('/user/favorites');
  }

  async addToFavorites(propertyId: string): Promise<ApiResponse<null>> {
    return this.makeRequest('/user/favorites', {
      method: 'POST',
      body: JSON.stringify({ property_id: propertyId }),
    });
  }

  async removeFromFavorites(propertyId: string): Promise<ApiResponse<null>> {
    return this.makeRequest(`/user/favorites/${propertyId}`, {
      method: 'DELETE',
    });
  }
}

export const apiService = new ApiService();