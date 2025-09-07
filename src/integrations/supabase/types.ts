export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      channels: {
        Row: {
          created_at: string | null
          id: string
          name: string
          position: number | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
          position?: number | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          position?: number | null
          user_id?: string | null
        }
        Relationships: []
      }
      customers: {
        Row: {
          address_line1: string | null
          address_line2: string | null
          city: string | null
          country: string | null
          created_at: string | null
          date_joined: string | null
          email: string | null
          id: string
          lifetime_value: number | null
          name: string
          phone: string | null
          postal_code: string | null
          state: string | null
          total_orders: number | null
          user_id: string | null
        }
        Insert: {
          address_line1?: string | null
          address_line2?: string | null
          city?: string | null
          country?: string | null
          created_at?: string | null
          date_joined?: string | null
          email?: string | null
          id?: string
          lifetime_value?: number | null
          name: string
          phone?: string | null
          postal_code?: string | null
          state?: string | null
          total_orders?: number | null
          user_id?: string | null
        }
        Update: {
          address_line1?: string | null
          address_line2?: string | null
          city?: string | null
          country?: string | null
          created_at?: string | null
          date_joined?: string | null
          email?: string | null
          id?: string
          lifetime_value?: number | null
          name?: string
          phone?: string | null
          postal_code?: string | null
          state?: string | null
          total_orders?: number | null
          user_id?: string | null
        }
        Relationships: []
      }
      expenses: {
        Row: {
          amount: number
          category: string
          created_at: string | null
          description: string | null
          expense_date: string
          id: string
          receipt_url: string | null
          status: string | null
          supplier_id: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          amount: number
          category: string
          created_at?: string | null
          description?: string | null
          expense_date: string
          id?: string
          receipt_url?: string | null
          status?: string | null
          supplier_id?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          amount?: number
          category?: string
          created_at?: string | null
          description?: string | null
          expense_date?: string
          id?: string
          receipt_url?: string | null
          status?: string | null
          supplier_id?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "expenses_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "suppliers"
            referencedColumns: ["id"]
          },
        ]
      }
      invoice_items: {
        Row: {
          amount: number
          created_at: string | null
          description: string
          id: string
          invoice_id: string
          quantity: number
          rate: number
        }
        Insert: {
          amount: number
          created_at?: string | null
          description: string
          id?: string
          invoice_id: string
          quantity: number
          rate: number
        }
        Update: {
          amount?: number
          created_at?: string | null
          description?: string
          id?: string
          invoice_id?: string
          quantity?: number
          rate?: number
        }
        Relationships: [
          {
            foreignKeyName: "invoice_items_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
        ]
      }
      invoices: {
        Row: {
          created_at: string | null
          customer_id: string | null
          due_date: string
          id: string
          invoice_date: string
          invoice_number: string
          notes: string | null
          payment_terms: string | null
          status: string | null
          subtotal: number
          tax_amount: number | null
          total_amount: number
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          customer_id?: string | null
          due_date: string
          id?: string
          invoice_date: string
          invoice_number: string
          notes?: string | null
          payment_terms?: string | null
          status?: string | null
          subtotal?: number
          tax_amount?: number | null
          total_amount?: number
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          customer_id?: string | null
          due_date?: string
          id?: string
          invoice_date?: string
          invoice_number?: string
          notes?: string | null
          payment_terms?: string | null
          status?: string | null
          subtotal?: number
          tax_amount?: number | null
          total_amount?: number
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "invoices_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      metrics: {
        Row: {
          created_at: string
          id: string
          name: string
          score: number
          touchpoint_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          score: number
          touchpoint_id: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          score?: number
          touchpoint_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "metrics_touchpoint_id_fkey"
            columns: ["touchpoint_id"]
            isOneToOne: false
            referencedRelation: "touchpoints"
            referencedColumns: ["id"]
          },
        ]
      }
      order_items: {
        Row: {
          created_at: string | null
          id: string
          order_id: string | null
          product_id: string | null
          quantity: number
          total_price: number
          unit_price: number
          variation_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          order_id?: string | null
          product_id?: string | null
          quantity: number
          total_price: number
          unit_price: number
          variation_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          order_id?: string | null
          product_id?: string | null
          quantity?: number
          total_price?: number
          unit_price?: number
          variation_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_variation_id_fkey"
            columns: ["variation_id"]
            isOneToOne: false
            referencedRelation: "product_variations"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          billing_address_line1: string | null
          billing_address_line2: string | null
          billing_city: string | null
          billing_country: string | null
          billing_postal_code: string | null
          billing_state: string | null
          created_at: string | null
          customer_id: string | null
          delivered_at: string | null
          id: string
          notes: string | null
          order_number: string
          payment_method: string | null
          payment_status: string | null
          shipped_at: string | null
          shipping_address_line1: string | null
          shipping_address_line2: string | null
          shipping_amount: number | null
          shipping_city: string | null
          shipping_country: string | null
          shipping_postal_code: string | null
          shipping_state: string | null
          status: string | null
          subtotal: number
          tax_amount: number | null
          total_amount: number
          tracking_number: string | null
          updated_at: string | null
        }
        Insert: {
          billing_address_line1?: string | null
          billing_address_line2?: string | null
          billing_city?: string | null
          billing_country?: string | null
          billing_postal_code?: string | null
          billing_state?: string | null
          created_at?: string | null
          customer_id?: string | null
          delivered_at?: string | null
          id?: string
          notes?: string | null
          order_number: string
          payment_method?: string | null
          payment_status?: string | null
          shipped_at?: string | null
          shipping_address_line1?: string | null
          shipping_address_line2?: string | null
          shipping_amount?: number | null
          shipping_city?: string | null
          shipping_country?: string | null
          shipping_postal_code?: string | null
          shipping_state?: string | null
          status?: string | null
          subtotal?: number
          tax_amount?: number | null
          total_amount?: number
          tracking_number?: string | null
          updated_at?: string | null
        }
        Update: {
          billing_address_line1?: string | null
          billing_address_line2?: string | null
          billing_city?: string | null
          billing_country?: string | null
          billing_postal_code?: string | null
          billing_state?: string | null
          created_at?: string | null
          customer_id?: string | null
          delivered_at?: string | null
          id?: string
          notes?: string | null
          order_number?: string
          payment_method?: string | null
          payment_status?: string | null
          shipped_at?: string | null
          shipping_address_line1?: string | null
          shipping_address_line2?: string | null
          shipping_amount?: number | null
          shipping_city?: string | null
          shipping_country?: string | null
          shipping_postal_code?: string | null
          shipping_state?: string | null
          status?: string | null
          subtotal?: number
          tax_amount?: number | null
          total_amount?: number
          tracking_number?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      payments: {
        Row: {
          amount: number
          created_at: string | null
          id: string
          invoice_id: string | null
          notes: string | null
          payment_date: string
          payment_method: string
          reference_number: string | null
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string | null
          id?: string
          invoice_id?: string | null
          notes?: string | null
          payment_date: string
          payment_method: string
          reference_number?: string | null
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string | null
          id?: string
          invoice_id?: string | null
          notes?: string | null
          payment_date?: string
          payment_method?: string
          reference_number?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "payments_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
        ]
      }
      performance_kpis: {
        Row: {
          ads_cost: number
          ads_gmv: number
          affiliate_gmv: number
          aov: number
          avg_visitors: number
          basket_size: number
          buyers: number
          cancelation_rate: number
          canceled_orders: number
          conversion_rate: number
          created_at: string | null
          fast_handover_rate: number
          id: number
          live_gmv: number
          orders: number
          period: string
          platform: string
          product_card_gmv: number
          response_rate: number
          return_rate: number
          returned_orders: number
          roas: number
          sales: number
          updated_at: string | null
          video_gmv: number
          visitors: number
        }
        Insert: {
          ads_cost?: number
          ads_gmv?: number
          affiliate_gmv?: number
          aov?: number
          avg_visitors?: number
          basket_size?: number
          buyers?: number
          cancelation_rate?: number
          canceled_orders?: number
          conversion_rate?: number
          created_at?: string | null
          fast_handover_rate?: number
          id?: number
          live_gmv?: number
          orders?: number
          period: string
          platform: string
          product_card_gmv?: number
          response_rate?: number
          return_rate?: number
          returned_orders?: number
          roas?: number
          sales?: number
          updated_at?: string | null
          video_gmv?: number
          visitors?: number
        }
        Update: {
          ads_cost?: number
          ads_gmv?: number
          affiliate_gmv?: number
          aov?: number
          avg_visitors?: number
          basket_size?: number
          buyers?: number
          cancelation_rate?: number
          canceled_orders?: number
          conversion_rate?: number
          created_at?: string | null
          fast_handover_rate?: number
          id?: number
          live_gmv?: number
          orders?: number
          period?: string
          platform?: string
          product_card_gmv?: number
          response_rate?: number
          return_rate?: number
          returned_orders?: number
          roas?: number
          sales?: number
          updated_at?: string | null
          video_gmv?: number
          visitors?: number
        }
        Relationships: []
      }
      product_variations: {
        Row: {
          color: string | null
          created_at: string | null
          id: string
          image_url: string | null
          price_adjustment: number | null
          product_id: string
          quantity: number
          size: string | null
          sku: string
          status: string | null
          updated_at: string | null
        }
        Insert: {
          color?: string | null
          created_at?: string | null
          id?: string
          image_url?: string | null
          price_adjustment?: number | null
          product_id: string
          quantity?: number
          size?: string | null
          sku: string
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          color?: string | null
          created_at?: string | null
          id?: string
          image_url?: string | null
          price_adjustment?: number | null
          product_id?: string
          quantity?: number
          size?: string | null
          sku?: string
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "product_variations_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          brand: string | null
          category: string | null
          color: string | null
          cost_price: number | null
          created_at: string | null
          description: string | null
          dimensions_height: number | null
          dimensions_length: number | null
          dimensions_width: number | null
          has_variations: boolean | null
          id: string
          image_url: string | null
          low_stock_threshold: number | null
          material: string | null
          name: string
          retail_price: number | null
          size: string | null
          sku: string
          status: string | null
          total_quantity: number | null
          updated_at: string | null
          user_id: string | null
          variation_type: string | null
          weight: number | null
        }
        Insert: {
          brand?: string | null
          category?: string | null
          color?: string | null
          cost_price?: number | null
          created_at?: string | null
          description?: string | null
          dimensions_height?: number | null
          dimensions_length?: number | null
          dimensions_width?: number | null
          has_variations?: boolean | null
          id?: string
          image_url?: string | null
          low_stock_threshold?: number | null
          material?: string | null
          name: string
          retail_price?: number | null
          size?: string | null
          sku: string
          status?: string | null
          total_quantity?: number | null
          updated_at?: string | null
          user_id?: string | null
          variation_type?: string | null
          weight?: number | null
        }
        Update: {
          brand?: string | null
          category?: string | null
          color?: string | null
          cost_price?: number | null
          created_at?: string | null
          description?: string | null
          dimensions_height?: number | null
          dimensions_length?: number | null
          dimensions_width?: number | null
          has_variations?: boolean | null
          id?: string
          image_url?: string | null
          low_stock_threshold?: number | null
          material?: string | null
          name?: string
          retail_price?: number | null
          size?: string | null
          sku?: string
          status?: string | null
          total_quantity?: number | null
          updated_at?: string | null
          user_id?: string | null
          variation_type?: string | null
          weight?: number | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      purchase_order_audit: {
        Row: {
          action: string
          id: string
          new_status: string | null
          notes: string | null
          old_status: string | null
          performed_at: string | null
          performed_by: string | null
          po_id: string | null
        }
        Insert: {
          action: string
          id?: string
          new_status?: string | null
          notes?: string | null
          old_status?: string | null
          performed_at?: string | null
          performed_by?: string | null
          po_id?: string | null
        }
        Update: {
          action?: string
          id?: string
          new_status?: string | null
          notes?: string | null
          old_status?: string | null
          performed_at?: string | null
          performed_by?: string | null
          po_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "purchase_order_audit_po_id_fkey"
            columns: ["po_id"]
            isOneToOne: false
            referencedRelation: "purchase_orders"
            referencedColumns: ["id"]
          },
        ]
      }
      purchase_order_items: {
        Row: {
          created_at: string | null
          id: string
          po_id: string | null
          product_id: string | null
          quantity: number
          received_quantity: number | null
          total_cost: number
          unit_cost: number
        }
        Insert: {
          created_at?: string | null
          id?: string
          po_id?: string | null
          product_id?: string | null
          quantity: number
          received_quantity?: number | null
          total_cost: number
          unit_cost: number
        }
        Update: {
          created_at?: string | null
          id?: string
          po_id?: string | null
          product_id?: string | null
          quantity?: number
          received_quantity?: number | null
          total_cost?: number
          unit_cost?: number
        }
        Relationships: [
          {
            foreignKeyName: "purchase_order_items_po_id_fkey"
            columns: ["po_id"]
            isOneToOne: false
            referencedRelation: "purchase_orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "purchase_order_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      purchase_orders: {
        Row: {
          billing_address_line1: string | null
          billing_address_line2: string | null
          billing_city: string | null
          billing_country: string | null
          billing_postal_code: string | null
          billing_state: string | null
          created_at: string | null
          created_by: string | null
          expected_delivery_date: string | null
          grand_total: number | null
          id: string
          internal_notes: string | null
          notes: string | null
          notes_to_vendor: string | null
          order_date: string | null
          payment_terms: string | null
          po_number: string
          shipping_address_line1: string | null
          shipping_address_line2: string | null
          shipping_city: string | null
          shipping_cost: number | null
          shipping_country: string | null
          shipping_postal_code: string | null
          shipping_state: string | null
          status: string | null
          subtotal: number | null
          supplier_id: string | null
          tax_amount: number | null
          total_amount: number | null
          updated_at: string | null
        }
        Insert: {
          billing_address_line1?: string | null
          billing_address_line2?: string | null
          billing_city?: string | null
          billing_country?: string | null
          billing_postal_code?: string | null
          billing_state?: string | null
          created_at?: string | null
          created_by?: string | null
          expected_delivery_date?: string | null
          grand_total?: number | null
          id?: string
          internal_notes?: string | null
          notes?: string | null
          notes_to_vendor?: string | null
          order_date?: string | null
          payment_terms?: string | null
          po_number?: string
          shipping_address_line1?: string | null
          shipping_address_line2?: string | null
          shipping_city?: string | null
          shipping_cost?: number | null
          shipping_country?: string | null
          shipping_postal_code?: string | null
          shipping_state?: string | null
          status?: string | null
          subtotal?: number | null
          supplier_id?: string | null
          tax_amount?: number | null
          total_amount?: number | null
          updated_at?: string | null
        }
        Update: {
          billing_address_line1?: string | null
          billing_address_line2?: string | null
          billing_city?: string | null
          billing_country?: string | null
          billing_postal_code?: string | null
          billing_state?: string | null
          created_at?: string | null
          created_by?: string | null
          expected_delivery_date?: string | null
          grand_total?: number | null
          id?: string
          internal_notes?: string | null
          notes?: string | null
          notes_to_vendor?: string | null
          order_date?: string | null
          payment_terms?: string | null
          po_number?: string
          shipping_address_line1?: string | null
          shipping_address_line2?: string | null
          shipping_city?: string | null
          shipping_cost?: number | null
          shipping_country?: string | null
          shipping_postal_code?: string | null
          shipping_state?: string | null
          status?: string | null
          subtotal?: number | null
          supplier_id?: string | null
          tax_amount?: number | null
          total_amount?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "purchase_orders_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "suppliers"
            referencedColumns: ["id"]
          },
        ]
      }
      stock_adjustments: {
        Row: {
          adjustment_type: string
          batch_id: string | null
          created_at: string | null
          id: string
          product_id: string | null
          quantity_change: number
          reason: string
          resulting_quantity: number
          user_id: string | null
          variation_id: string | null
        }
        Insert: {
          adjustment_type: string
          batch_id?: string | null
          created_at?: string | null
          id?: string
          product_id?: string | null
          quantity_change: number
          reason: string
          resulting_quantity: number
          user_id?: string | null
          variation_id?: string | null
        }
        Update: {
          adjustment_type?: string
          batch_id?: string | null
          created_at?: string | null
          id?: string
          product_id?: string | null
          quantity_change?: number
          reason?: string
          resulting_quantity?: number
          user_id?: string | null
          variation_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "stock_adjustments_batch_id_fkey"
            columns: ["batch_id"]
            isOneToOne: false
            referencedRelation: "stock_batches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "stock_adjustments_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "stock_adjustments_variation_id_fkey"
            columns: ["variation_id"]
            isOneToOne: false
            referencedRelation: "product_variations"
            referencedColumns: ["id"]
          },
        ]
      }
      stock_batches: {
        Row: {
          batch_id: string
          cost_price: number | null
          created_at: string | null
          date_received: string | null
          expiration_date: string | null
          id: string
          product_id: string | null
          quantity: number
          supplier_reference: string | null
        }
        Insert: {
          batch_id: string
          cost_price?: number | null
          created_at?: string | null
          date_received?: string | null
          expiration_date?: string | null
          id?: string
          product_id?: string | null
          quantity?: number
          supplier_reference?: string | null
        }
        Update: {
          batch_id?: string
          cost_price?: number | null
          created_at?: string | null
          date_received?: string | null
          expiration_date?: string | null
          id?: string
          product_id?: string | null
          quantity?: number
          supplier_reference?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "stock_batches_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      stock_take_items: {
        Row: {
          counted_at: string | null
          counted_by: string | null
          counted_quantity: number | null
          created_at: string | null
          discrepancy: number | null
          expected_quantity: number
          id: string
          notes: string | null
          product_id: string | null
          stock_take_id: string | null
        }
        Insert: {
          counted_at?: string | null
          counted_by?: string | null
          counted_quantity?: number | null
          created_at?: string | null
          discrepancy?: number | null
          expected_quantity: number
          id?: string
          notes?: string | null
          product_id?: string | null
          stock_take_id?: string | null
        }
        Update: {
          counted_at?: string | null
          counted_by?: string | null
          counted_quantity?: number | null
          created_at?: string | null
          discrepancy?: number | null
          expected_quantity?: number
          id?: string
          notes?: string | null
          product_id?: string | null
          stock_take_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "stock_take_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "stock_take_items_stock_take_id_fkey"
            columns: ["stock_take_id"]
            isOneToOne: false
            referencedRelation: "stock_takes"
            referencedColumns: ["id"]
          },
        ]
      }
      stock_takes: {
        Row: {
          completed_at: string | null
          completed_by: string | null
          created_at: string | null
          id: string
          location: string | null
          name: string
          started_at: string | null
          started_by: string | null
          status: string | null
          total_discrepancy_value: number | null
        }
        Insert: {
          completed_at?: string | null
          completed_by?: string | null
          created_at?: string | null
          id?: string
          location?: string | null
          name: string
          started_at?: string | null
          started_by?: string | null
          status?: string | null
          total_discrepancy_value?: number | null
        }
        Update: {
          completed_at?: string | null
          completed_by?: string | null
          created_at?: string | null
          id?: string
          location?: string | null
          name?: string
          started_at?: string | null
          started_by?: string | null
          status?: string | null
          total_discrepancy_value?: number | null
        }
        Relationships: []
      }
      suppliers: {
        Row: {
          address_line1: string | null
          address_line2: string | null
          city: string | null
          contact_person: string | null
          country: string | null
          created_at: string | null
          email: string | null
          id: string
          name: string
          payment_terms: string | null
          phone: string | null
          postal_code: string | null
          state: string | null
          total_purchase_volume: number | null
          user_id: string | null
        }
        Insert: {
          address_line1?: string | null
          address_line2?: string | null
          city?: string | null
          contact_person?: string | null
          country?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          name: string
          payment_terms?: string | null
          phone?: string | null
          postal_code?: string | null
          state?: string | null
          total_purchase_volume?: number | null
          user_id?: string | null
        }
        Update: {
          address_line1?: string | null
          address_line2?: string | null
          city?: string | null
          contact_person?: string | null
          country?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          name?: string
          payment_terms?: string | null
          phone?: string | null
          postal_code?: string | null
          state?: string | null
          total_purchase_volume?: number | null
          user_id?: string | null
        }
        Relationships: []
      }
      tasks: {
        Row: {
          assignee_id: string | null
          created_at: string
          created_by: string
          description: string | null
          due_date: string | null
          group_name: string
          id: string
          priority: string
          status: string
          title: string
          updated_at: string
          workspace_id: string
        }
        Insert: {
          assignee_id?: string | null
          created_at?: string
          created_by: string
          description?: string | null
          due_date?: string | null
          group_name?: string
          id?: string
          priority?: string
          status?: string
          title: string
          updated_at?: string
          workspace_id: string
        }
        Update: {
          assignee_id?: string | null
          created_at?: string
          created_by?: string
          description?: string | null
          due_date?: string | null
          group_name?: string
          id?: string
          priority?: string
          status?: string
          title?: string
          updated_at?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "tasks_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      touchpoints: {
        Row: {
          channel_id: string | null
          comment: string | null
          created_at: string | null
          id: string
          name: string
          position: number | null
        }
        Insert: {
          channel_id?: string | null
          comment?: string | null
          created_at?: string | null
          id?: string
          name: string
          position?: number | null
        }
        Update: {
          channel_id?: string | null
          comment?: string | null
          created_at?: string | null
          id?: string
          name?: string
          position?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "touchpoints_channel_id_fkey"
            columns: ["channel_id"]
            isOneToOne: false
            referencedRelation: "channels"
            referencedColumns: ["id"]
          },
        ]
      }
      workspaces: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          owner_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          owner_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          owner_id?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      generate_batch_id: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      generate_invoice_number: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      generate_order_number: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      generate_po_number: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
