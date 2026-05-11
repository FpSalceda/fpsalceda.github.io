import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cjqwnaqkpwpradwrmxjh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqcXduYXFrcHdwcmFkd3JteGpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg0NTU0NjMsImV4cCI6MjA5NDAzMTQ2M30.gUdD80ayc7eMYlHUfHV18bQiY5cOE6jaTW1V5pRalmw'

export const supabase = createClient(supabaseUrl, supabaseKey)