// Modal Content - Single source of truth for all modal data
const modalContent = {
    visa: {
        title: 'UAE Visa & Entry Requirements',
        content: `
            <div class="modal-section">
                <h4>Visa Requirements by Country</h4>
                <div class="visa-grid">
                    <div class="visa-card easy">
                        <div class="visa-flag">US, EU, UK, Australia, Canada</div>
                        <h5>Visa on Arrival - Easy!</h5>
                        <p><strong>30 days free</strong> for US, EU, UK, Australia, Canada citizens</p>
                        <ul>
                            <li>No advance application needed</li>
                            <li>Just passport required (6+ months validity)</li>
                            <li>Processed in 2-5 minutes at airport</li>
                        </ul>
                    </div>
                    <div class="visa-card advance">
                        <div class="visa-flag">India, Pakistan, Bangladesh, Philippines</div>
                        <h5>Pre-Arranged Visa Required</h5>
                        <p>Some countries need <strong>advance visa</strong> application</p>
                        <ul>
                            <li>Apply online or through embassy</li>
                            <li>Process time: 2-5 business days</li>
                            <li>Fee varies by nationality</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4>What You Need at Immigration</h4>
                <div class="requirements-grid">
                    <div class="requirement-card">
                        <h5>Required Documents</h5>
                        <ul>
                            <li><strong>Passport:</strong> Valid for 6+ months</li>
                            <li><strong>Return ticket:</strong> Confirmed booking</li>
                            <li><strong>Accommodation proof:</strong> Hotel booking or invitation</li>
                        </ul>
                    </div>
                    <div class="requirement-card">
                        <h5>Immigration Process</h5>
                        <ul>
                            <li><strong>Queue time:</strong> 5-30 minutes</li>
                            <li><strong>Processing:</strong> 2-5 minutes per person</li>
                            <li><strong>Payment:</strong> Credit card accepted</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4>Prescription Medications & Drug Laws Guide</h4>
                <div class="medication-rules">
                    <div class="rule-card critical">
                        <h5>Zero Tolerance Items</h5>
                        <ul>
                            <li><strong>CBD oil/products</strong> - Including hemp, even if legal in your country</li>
                            <li><strong>Medical marijuana</strong> - No exceptions, even with prescriptions</li>
                            <li><strong>Poppy seeds</strong> - Can trigger drug tests, avoid entirely</li>
                            <li><strong>Tramadol without prescription</strong> - Common painkiller, strictly controlled</li>
                        </ul>
                    </div>

                    <div class="rule-card allowed">
                        <h5>Generally Allowed (With Proper Documentation)</h5>
                        <ul>
                            <li><strong>Common medications:</strong> Ibuprofen, paracetamol, antibiotics</li>
                            <li><strong>Prescribed medications:</strong> With original prescription and doctor's letter</li>
                            <li><strong>Insulin & diabetes supplies:</strong> Clearly labeled</li>
                            <li><strong>Heart/blood pressure medications:</strong> With prescription</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    },
    alcohol: {
        title: 'Alcohol Laws & Cultural Guidelines',
        content: `
            <div class="info-section">
                <h4>Where Alcohol is Permitted</h4>
                <ul>
                    <li>Licensed hotels and restaurants</li>
                    <li>Designated bars and nightclubs</li>
                    <li>Private residences (with personal license)</li>
                    <li>Specific beach clubs and resorts</li>
                    <li>Cruise ships and duty-free shops</li>
                </ul>

                <h4>Important Rules & Restrictions</h4>
                <ul>
                    <li>NO public drinking or open containers in streets</li>
                    <li>NO public intoxication - strictly enforced</li>
                    <li>ZERO tolerance for drink driving - serious offense</li>
                    <li>Respect local customs during Ramadan (limited serving hours)</li>
                    <li>Age restriction: 21+ for purchasing and consuming</li>
                </ul>

                <h4>Best Places for Western Tourists</h4>
                <ul>
                    <li><strong>Dubai:</strong> JBR, Dubai Marina, Downtown Dubai bars</li>
                    <li><strong>Abu Dhabi:</strong> Yas Island, Corniche area hotels</li>
                    <li><strong>Sharjah:</strong> Very limited - mostly dry emirate</li>
                </ul>

                <h4>Cultural Sensitivity Tips</h4>
                <p>While alcohol is available in tourist areas, show respect for local customs. Avoid excessive drinking and always behave respectfully in public areas.</p>
            </div>
        `
    },
    security: {
        title: 'Safety & Security Information',
        content: `
            <div class="modal-section">
                <h4>Crime & Safety Statistics</h4>
                <div class="safety-stats">
                    <div class="stat-item">
                        <span class="stat-number">#2</span>
                        <span class="stat-label">Safest Country Globally</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">99.2%</span>
                        <span class="stat-label">Tourist Safety Rate</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">24/7</span>
                        <span class="stat-label">Tourist Police Support</span>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4>What Makes UAE So Safe?</h4>
                <ul class="safety-list">
                    <li><strong>Zero Tolerance Policy:</strong> Strict laws with immediate enforcement</li>
                    <li><strong>Advanced Surveillance:</strong> Modern CCTV and security systems everywhere</li>
                    <li><strong>Tourist Police:</strong> Dedicated officers speak multiple languages</li>
                    <li><strong>Cultural Respect:</strong> Strong community values and hospitality traditions</li>
                    <li><strong>Economic Stability:</strong> High employment and living standards</li>
                </ul>
            </div>

            <div class="modal-section">
                <h4>Complete Emergency Contact Guide</h4>
                <div class="emergency-contacts">
                    <div class="contact-card priority">
                        <div class="contact-info">
                            <h6>Police Emergency</h6>
                            <p class="contact-number">999</p>
                            <p class="contact-note">Works from any phone, English-speaking operators</p>
                        </div>
                    </div>
                    <div class="contact-card priority">
                        <div class="contact-info">
                            <h6>Medical Emergency/Ambulance</h6>
                            <p class="contact-number">998</p>
                            <p class="contact-note">Free emergency service, modern ambulances</p>
                        </div>
                    </div>
                    <div class="contact-card priority">
                        <div class="contact-info">
                            <h6>Fire Department</h6>
                            <p class="contact-number">997</p>
                            <p class="contact-note">24/7 service, very fast response</p>
                        </div>
                    </div>
                    <div class="contact-card tourist">
                        <div class="contact-info">
                            <h6>Tourist Police (Dubai)</h6>
                            <p class="contact-number">901</p>
                            <p class="contact-note">Multilingual support for tourists</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4>Common Scams to Avoid</h4>
                <div class="scam-warnings">
                    <div class="scam-card">
                        <h5>Fake Gold Jewelry</h5>
                        <p>Aggressive sellers in some souks claiming "special deals" on gold</p>
                        <p><strong>Solution:</strong> Only buy from reputable, licensed gold dealers</p>
                    </div>
                    <div class="scam-card">
                        <h5>Taxi Overcharging</h5>
                        <p>Some taxis refuse to use meter or quote inflated prices</p>
                        <p><strong>Solution:</strong> Insist on meter or use Uber/Careem</p>
                    </div>
                </div>
            </div>
        `
    },
    weather: {
        title: 'Best Time to Visit UAE',
        content: `
            <div class="modal-section">
                <h4>Best Time to Visit UAE</h4>
                <div class="timing-grid">
                    <div class="season-card peak">
                        <h5>Peak Season (Nov-Mar)</h5>
                        <div class="season-badge best">Best Weather</div>
                        <ul>
                            <li><strong>Temperature:</strong> 20-30°C (68-86°F)</li>
                            <li><strong>Humidity:</strong> Low and comfortable</li>
                            <li><strong>Rainfall:</strong> Minimal</li>
                            <li><strong>Crowds:</strong> High tourist season</li>
                            <li><strong>Prices:</strong> Higher hotel rates</li>
                        </ul>
                    </div>
                    <div class="season-card shoulder">
                        <h5>Shoulder Season (Apr-May, Oct)</h5>
                        <div class="season-badge good">Good Balance</div>
                        <ul>
                            <li><strong>Temperature:</strong> 25-35°C (77-95°F)</li>
                            <li><strong>Humidity:</strong> Moderate</li>
                            <li><strong>Rainfall:</strong> Rare</li>
                            <li><strong>Crowds:</strong> Fewer tourists</li>
                            <li><strong>Prices:</strong> Better hotel deals</li>
                        </ul>
                    </div>
                    <div class="season-card hot">
                        <h5>Summer (Jun-Sep)</h5>
                        <div class="season-badge challenging">Very Hot</div>
                        <ul>
                            <li><strong>Temperature:</strong> 35-45°C (95-113°F)</li>
                            <li><strong>Humidity:</strong> Very high (80%+)</li>
                            <li><strong>Rainfall:</strong> Occasional storms</li>
                            <li><strong>Crowds:</strong> Lowest tourist numbers</li>
                            <li><strong>Prices:</strong> Cheapest rates</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4>Month-by-Month Guide</h4>
                <div class="monthly-guide">
                    <div class="month-group excellent">
                        <h5>Excellent (Dec-Feb)</h5>
                        <p>Perfect weather, ideal for all activities including outdoor adventures, beach time, and city exploration. Expect higher prices and crowds.</p>
                    </div>
                    <div class="month-group very-good">
                        <h5>Very Good (Nov, Mar)</h5>
                        <p>Great weather with slightly fewer crowds. March can be perfect for outdoor activities. November is ideal for desert safaris.</p>
                    </div>
                    <div class="month-group good">
                        <h5>Good (Apr, Oct)</h5>
                        <p>Warm but manageable. October is great as temperatures cool down. April offers good weather before the heat kicks in.</p>
                    </div>
                    <div class="month-group challenging">
                        <h5>Challenging (Jun-Sep)</h5>
                        <p>Very hot and humid. Perfect for indoor activities like malls, museums, and aquariums. Beach activities best in early morning or evening.</p>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4>Activity-Based Timing</h4>
                <div class="activity-timing">
                    <div class="activity-card">
                        <h5>Beach & Water Sports</h5>
                        <p><strong>Best:</strong> Nov-Apr | <strong>Avoid:</strong> Jul-Aug midday</p>
                    </div>
                    <div class="activity-card">
                        <h5>Desert Safari</h5>
                        <p><strong>Best:</strong> Nov-Mar | <strong>Avoid:</strong> Jun-Aug (too hot)</p>
                    </div>
                    <div class="activity-card">
                        <h5>Shopping & Indoor Activities</h5>
                        <p><strong>Best:</strong> Year-round (malls are air-conditioned)</p>
                    </div>
                    <div class="activity-card">
                        <h5>Festivals & Events</h5>
                        <p><strong>Peak:</strong> Nov-Mar (Dubai Shopping Festival, etc.)</p>
                    </div>
                </div>
            </div>

            <div class="modal-section highlight">
                <h4>Insider Tips</h4>
                <div class="timing-tips">
                    <div class="tip">
                        <p><strong>Budget Travelers:</strong> Visit Jun-Sep for 50% cheaper hotels. Just stay indoors during peak heat!</p>
                    </div>
                    <div class="tip">
                        <p><strong>Event Lovers:</strong> Book Jan-Mar for Dubai Shopping Festival, Art Week, and Food Festival.</p>
                    </div>
                    <div class="tip">
                        <p><strong>Summer Visitors:</strong> Plan activities for early morning (6-9am) and late evening (6pm+).</p>
                    </div>
                </div>
            </div>
        `
    },
    culture: {
        title: 'Cultural Guidelines & Etiquette',
        content: `
            <div class="info-section">
                <h4>Dress Code Guidelines</h4>
                <p><strong>General Rule:</strong> Modest dress is respected but UAE is very tolerant in tourist areas.</p>

                <h4>Beach & Pool Areas</h4>
                <ul>
                    <li>Swimwear and bikinis are perfectly acceptable</li>
                    <li>Cover up when leaving beach/pool areas</li>
                    <li>Private resort beaches have most relaxed rules</li>
                </ul>

                <h4>Shopping Malls & Public Areas</h4>
                <ul>
                    <li>Shoulders and knees should be covered</li>
                    <li>No see-through or extremely tight clothing</li>
                    <li>T-shirts and knee-length shorts are fine</li>
                    <li>Air conditioning means bring light layers</li>
                </ul>

                <h4>🕌 Religious Sites</h4>
                <ul>
                    <li><strong>Mosques:</strong> Long pants, long sleeves, head covering for women</li>
                    <li>Remove shoes before entering</li>
                    <li>Photography rules vary - ask permission</li>
                    <li>Free abayas often provided for women</li>
                </ul>

                <h4>Cultural Etiquette</h4>
                <ul>
                    <li>Right hand for greetings and eating</li>
                    <li>Avoid pointing with fingers or showing shoe soles</li>
                    <li>Public displays of affection should be minimal</li>
                    <li>Photography of people requires permission</li>
                    <li>Friday is the holy day (like Sunday in Western countries)</li>
                </ul>

                <h4>During Ramadan (Dates vary)</h4>
                <ul>
                    <li>Avoid eating/drinking in public during daylight</li>
                    <li>Hotels and tourist areas remain normal</li>
                    <li>Evening celebrations are festive and welcoming</li>
                    <li>Shorter working hours, some attractions close early</li>
                </ul>
            </div>
        `
    },
    currency: {
        title: 'Currency & Payment Methods',
        content: `
            <div class="info-section">
                <h4>Currency: UAE Dirham (AED)</h4>
                <p><strong>Exchange Rate:</strong> 1 USD ≈ 3.67 AED (fixed rate since 1997)</p>
                <p><strong>Denominations:</strong> 5, 10, 20, 50, 100, 200, 500, 1000 AED notes</p>

                <h4>Payment Methods</h4>
                <ul>
                    <li><strong>Credit Cards:</strong> Visa, MasterCard, Amex widely accepted</li>
                    <li><strong>Contactless:</strong> Apple Pay, Google Pay, Samsung Pay</li>
                    <li><strong>Cash:</strong> Still important for small vendors, taxis</li>
                    <li><strong>Digital Payments:</strong> UAE Pass app gaining popularity</li>
                </ul>

                <h4>Where to Exchange Money</h4>
                <ul>
                    <li><strong>Best Rates:</strong> Licensed exchange houses (Al Ansari, UAE Exchange)</li>
                    <li><strong>Convenient:</strong> Banks (slightly higher fees)</li>
                    <li><strong>Avoid:</strong> Hotels and airports (poor rates)</li>
                    <li><strong>ATMs:</strong> Widely available, reasonable fees</li>
                </ul>

                <h4>Tipping Culture</h4>
                <ul>
                    <li><strong>Restaurants:</strong> 10-15% if service charge not included</li>
                    <li><strong>Hotels:</strong> 10-20 AED for bellhops, housekeeping</li>
                    <li><strong>Taxis:</strong> Round up or 5-10 AED for longer rides</li>
                    <li><strong>Spa/Beauty:</strong> 15-20% of service cost</li>
                    <li><strong>Tour Guides:</strong> 50-100 AED per day</li>
                </ul>

                <h4>Money-Saving Tips</h4>
                <ul>
                    <li>Use metro and buses - very affordable and clean</li>
                    <li>Eat at food courts and local restaurants</li>
                    <li>Shop during Dubai Shopping Festival (Jan-Feb)</li>
                    <li>Free activities: beaches, malls, Dubai Fountain</li>
                    <li>Happy hours at bars (typically 4-7 PM)</li>
                </ul>

                <h4>Typical Costs for Tourists</h4>
                <ul>
                    <li><strong>Meal:</strong> 30-150 AED ($8-40)</li>
                    <li><strong>Taxi:</strong> 12-50 AED ($3-14)</li>
                    <li><strong>Metro:</strong> 3-8 AED ($1-2)</li>
                    <li><strong>Attraction:</strong> 50-200 AED ($14-55)</li>
                </ul>
            </div>
        `
    },
    transport: {
        title: 'Transportation Guide',
        content: `
            <div class="info-section">
                <h4>Dubai Metro (Highly Recommended)</h4>
                <ul>
                    <li><strong>Coverage:</strong> Red & Green lines cover major attractions</li>
                    <li><strong>Cost:</strong> 3-8 AED per journey</li>
                    <li><strong>Hours:</strong> 6 AM - 11 PM (1 AM weekends)</li>
                    <li><strong>Features:</strong> Air-conditioned, WiFi, women-only carriages</li>
                    <li><strong>Nol Card:</strong> Reusable card for all public transport</li>
                </ul>

                <h4>Public Buses</h4>
                <ul>
                    <li>Extensive network covering all emirates</li>
                    <li>Air-conditioned and comfortable</li>
                    <li>Very affordable: 2-7 AED per journey</li>
                    <li>Use same Nol Card as metro</li>
                </ul>

                <h4>Taxis & Ride-Hailing</h4>
                <ul>
                    <li><strong>Official Taxis:</strong> Metered, cream-colored (Dubai), silver (Abu Dhabi)</li>
                    <li><strong>Uber/Careem:</strong> Widely available, cashless payments</li>
                    <li><strong>Starting fare:</strong> 12 AED (3.27 USD)</li>
                    <li><strong>Airport taxis:</strong> 20 AED starting fare</li>
                </ul>

                <h4>Inter-Emirate Transportation</h4>
                <ul>
                    <li><strong>Dubai ↔ Abu Dhabi:</strong> Bus (25 AED) or taxi (250-300 AED)</li>
                    <li><strong>Bus timings:</strong> Every 40 minutes, 2-hour journey</li>
                    <li><strong>Car rental:</strong> Available from 100 AED/day</li>
                    <li><strong>Private transfers:</strong> Can be arranged through hotels</li>
                </ul>

                <h4>Airport Transportation</h4>
                <ul>
                    <li><strong>Dubai (DXB):</strong> Metro Red Line direct connection</li>
                    <li><strong>Abu Dhabi (AUH):</strong> Bus to city center (4 AED)</li>
                    <li><strong>Sharjah (SHJ):</strong> Taxi or bus to Dubai (45 mins)</li>
                </ul>

                <h4>Alternative Transport</h4>
                <ul>
                    <li><strong>Dubai Tram:</strong> Covers Marina and JBR areas</li>
                    <li><strong>Water taxis:</strong> Dubai Creek and Marina</li>
                    <li><strong>Bike sharing:</strong> Careem Bike, Arnab in some areas</li>
                    <li><strong>Walking:</strong> Great in air-conditioned areas like malls</li>
                </ul>

                <h4>Transportation Tips</h4>
                <ul>
                    <li>Download Careem and Uber apps before arrival</li>
                    <li>Get Nol Card at airport for all public transport</li>
                    <li>Avoid rush hours: 7-9 AM and 5-7 PM</li>
                    <li>Metro is fastest for Dubai attractions</li>
                    <li>Book airport transfers in advance for best prices</li>
                </ul>
            </div>
        `
    },
    health: {
        title: 'Health & Medical Information',
        content: `
            <div class="info-section">
                <h4>Healthcare System</h4>
                <p>UAE has world-class healthcare with many international doctors. Both public and private options available.</p>

                <h4>Emergency Medical Services</h4>
                <ul>
                    <li><strong>Emergency:</strong> 998 (Ambulance)</li>
                    <li><strong>Dubai Health Authority:</strong> 800-DHA (800-342)</li>
                    <li><strong>Abu Dhabi Health:</strong> 800-50</li>
                </ul>

                <h4>Top International Hospitals</h4>
                <ul>
                    <li><strong>Dubai:</strong> American Hospital, Dubai Hospital, Emirates Hospital</li>
                    <li><strong>Abu Dhabi:</strong> Cleveland Clinic, American Hospital</li>
                    <li><strong>Sharjah:</strong> Zulekha Hospital, Kuwait Hospital</li>
                    <li>All have English-speaking doctors and staff</li>
                </ul>

                <h4>Pharmacies</h4>
                <ul>
                    <li><strong>Major Chains:</strong> Aster, Life Pharmacy, Boots</li>
                    <li><strong>Hours:</strong> Most 24/7 in tourist areas</li>
                    <li><strong>Prescriptions:</strong> Many Western medications available</li>
                    <li><strong>Over-the-counter:</strong> Common medications readily available</li>
                </ul>

                <h4>Vaccinations & Health Precautions</h4>
                <ul>
                    <li><strong>Required:</strong> None for most Western countries</li>
                    <li><strong>Recommended:</strong> Routine vaccinations up to date</li>
                    <li><strong>COVID-19:</strong> Check latest requirements before travel</li>
                    <li><strong>Malaria:</strong> Not a risk in UAE</li>
                </ul>

                <h4>Common Health Considerations</h4>
                <ul>
                    <li><strong>Heat exhaustion:</strong> Stay hydrated, avoid midday sun</li>
                    <li><strong>Sunburn:</strong> Use high SPF, UAE sun is intense</li>
                    <li><strong>Dehydration:</strong> Drink water regularly, especially summer</li>
                    <li><strong>Food safety:</strong> Generally excellent, tap water safe</li>
                </ul>

                <h4>Travel Insurance</h4>
                <ul>
                    <li><strong>Highly recommended:</strong> Medical costs can be expensive</li>
                    <li><strong>Coverage needed:</strong> Emergency medical, evacuation</li>
                    <li><strong>Adventure activities:</strong> Check if covered separately</li>
                    <li><strong>COVID-19:</strong> Ensure pandemic coverage included</li>
                </ul>

                <h4>Prescription Medications</h4>
                <ul>
                    <li>Bring sufficient supply for your stay</li>
                    <li>Carry original prescription and doctor's letter</li>
                    <li>Some medications require approval - check in advance</li>
                    <li>Controlled substances have strict regulations</li>
                </ul>

                <h4>Beach & Water Safety</h4>
                <ul>
                    <li>All public beaches have lifeguards during day</li>
                    <li>Strong currents possible - follow warning flags</li>
                    <li>Marine life generally harmless</li>
                    <li>Stay hydrated when spending time outdoors</li>
                </ul>
            </div>
        `
    }
};

// Platinumlist Affiliate Configuration
const platinumlistConfig = {
    affiliateCode: 'GOUAE2024', // Replace with actual affiliate code
    baseUrl: 'https://platinumlist.net/',
    trackingParam: 'ref'
};

// Hotel Categories Configuration
const hotelCategories = {
    family: {
        title: 'Family-Friendly Hotels',
        description: 'Perfect for traveling with children - pools, kids clubs, and family rooms'
    },
    solo: {
        title: 'Solo Traveler Hotels',
        description: 'Safe environments with social areas and great value'
    },
    business: {
        title: 'Business Hotels',
        description: 'Professional amenities and convenient locations'
    },
    luxury: {
        title: 'Luxury Resorts',
        description: 'Ultimate comfort with 5-star service and premium locations'
    },
    budget: {
        title: 'Budget-Friendly Options',
        description: 'Great value without compromising on quality and safety'
    }
};

// Dining Categories
const diningCategories = {
    rooftop: {
        title: 'Rooftop Dining',
        venues: [
            { name: 'Atmosphere - Burj Khalifa', type: 'Fine Dining', emirate: 'Dubai', description: 'World\'s highest restaurant with stunning views' },
            { name: 'Ce La Vie - Four Seasons', type: 'International', emirate: 'Dubai', description: 'Stylish rooftop with city skyline views' },
            { name: 'Zero Gravity', type: 'Beach Club', emirate: 'Dubai', description: 'Beachfront dining with panoramic views' }
        ]
    },
    street: {
        title: 'Street Food & Local Eats',
        venues: [
            { name: 'Al Dhiyafah Street', type: 'Lebanese', emirate: 'Dubai', description: 'Authentic Middle Eastern street food' },
            { name: 'Gold Souq Food Court', type: 'Mixed', emirate: 'Dubai', description: 'Traditional flavors in historic setting' },
            { name: 'Ravi Restaurant', type: 'Pakistani', emirate: 'Dubai', description: 'Famous budget-friendly local spot' }
        ]
    },
    international: {
        title: 'International Cuisine',
        venues: [
            { name: 'Gordon Ramsay Hell\'s Kitchen', type: 'European', emirate: 'Dubai', description: 'Celebrity chef experience' },
            { name: 'Nobu', type: 'Japanese', emirate: 'Dubai', description: 'World-renowned Japanese fine dining' },
            { name: 'La Petite Maison', type: 'French', emirate: 'Dubai', description: 'Authentic French Mediterranean cuisine' }
        ]
    },
    local: {
        title: 'Local Emirati Cuisine',
        venues: [
            { name: 'Al Fanar Restaurant', type: 'Emirati', emirate: 'Dubai', description: 'Traditional Emirati dishes in heritage setting' },
            { name: 'Seven Sands', type: 'Emirati', emirate: 'Abu Dhabi', description: 'Contemporary take on local flavors' },
            { name: 'Logma', type: 'Emirati', emirate: 'Dubai', description: 'Modern Emirati comfort food' }
        ]
    },
    fine: {
        title: 'Fine Dining',
        venues: [
            { name: 'Zuma', type: 'Japanese', emirate: 'Dubai', description: 'Contemporary Japanese robatayaki' },
            { name: 'Ossiano', type: 'European', emirate: 'Dubai', description: 'Underwater dining experience' },
            { name: 'CUT by Wolfgang Puck', type: 'Steakhouse', emirate: 'Dubai', description: 'Premium steaks and modern American cuisine' }
        ]
    }
};

// Modal Functions - Global scope
window.openModal = function(type) {
    console.log('Opening modal:', type);
    const modal = document.getElementById('modal-overlay');
    const title = document.getElementById('modal-title');
    const content = document.getElementById('modal-content');

    if (modalContent[type]) {
        title.textContent = modalContent[type].title;
        content.innerHTML = modalContent[type].content;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
        console.error('Modal content not found for:', type);
    }
}

window.closeModal = function() {
    console.log('Closing modal');
    const modal = document.getElementById('modal-overlay');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Platinumlist Integration
function generatePlatinumlistUrl(experienceId) {
    return `${platinumlistConfig.baseUrl}experience/${experienceId}?${platinumlistConfig.trackingParam}=${platinumlistConfig.affiliateCode}`;
}

window.bookExperience = function(platform, experienceId) {
    if (platform === 'platinumlist') {
        const affiliateUrl = generatePlatinumlistUrl(experienceId);
        window.open(affiliateUrl, '_blank');

        // Track the click for analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'affiliate_click', {
                'platform': 'platinumlist',
                'experience_id': experienceId
            });
        }
    }
}

// Flight Search Integration
window.searchFlights = function() {
    // Get user's approximate location for origin (fallback to popular Western cities)
    const destinations = ['DXB', 'AUH', 'SHJ'];
    const today = new Date();
    const checkin = new Date(today.getTime() + (14 * 24 * 60 * 60 * 1000)); // 2 weeks from now
    const checkout = new Date(checkin.getTime() + (7 * 24 * 60 * 60 * 1000)); // 1 week stay

    const checkinStr = checkin.toISOString().split('T')[0];
    const checkoutStr = checkout.toISOString().split('T')[0];

    // Skyscanner affiliate URL - replace with actual affiliate ID
    const skyscannerUrl = `https://www.skyscanner.com/flights-to/uae/${checkinStr}/${checkoutStr}?adultsv2=1&childrenv2=&ref=gouae`;
    window.open(skyscannerUrl, '_blank');
}

// Hotel Search Integration
window.searchHotels = function(category) {
    const config = hotelCategories[category];
    const today = new Date();
    const checkin = new Date(today.getTime() + (14 * 24 * 60 * 60 * 1000));
    const checkout = new Date(checkin.getTime() + (7 * 24 * 60 * 60 * 1000));

    const checkinStr = checkin.toISOString().split('T')[0];
    const checkoutStr = checkout.toISOString().split('T')[0];

    // Booking.com affiliate URL for Dubai - replace with actual affiliate ID
    const bookingUrl = `https://www.booking.com/searchresults.html?dest_id=-782831&dest_type=city&checkin=${checkinStr}&checkout=${checkoutStr}&group_adults=2&no_rooms=1&offset=0&aid=gouae2024`;
    window.open(bookingUrl, '_blank');

    // Track hotel category selection
    if (typeof gtag !== 'undefined') {
        gtag('event', 'hotel_search', {
            'category': category,
            'platform': 'booking_com'
        });
    }
}

// Dining Guide Functions
window.showDining = function(category, targetElement) {
    // Update active tab
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Add active class to target element or find by category
    if (targetElement) {
        targetElement.classList.add('active');
    } else {
        // Find the tab button that matches this category
        const tabBtn = document.querySelector(`[data-category="${category}"]`) ||
                      document.querySelector('.tab-btn'); // fallback to first tab
        if (tabBtn) {
            tabBtn.classList.add('active');
        }
    }

    // Show dining content
    const contentDiv = document.getElementById('dining-content');
    const categoryData = diningCategories[category];

    if (categoryData) {
        let html = `<h3>${categoryData.title}</h3><div class="venues-list">`;

        categoryData.venues.forEach(venue => {
            html += `
                <div class="venue-card">
                    <h4>${venue.name}</h4>
                    <p class="venue-type">${venue.type} • ${venue.emirate}</p>
                    <p class="venue-description">${venue.description}</p>
                </div>
            `;
        });

        html += '</div>';
        contentDiv.innerHTML = html;
    }
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Mobile Menu Toggle
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    if (menuToggle && navList) {
        // Toggle menu on hamburger click
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Hamburger menu clicked');
            navList.classList.toggle('active');
            this.classList.toggle('active');
            console.log('Nav list active:', navList.classList.contains('active'));

            // Visual debug: change hamburger color when active
            if (navList.classList.contains('active')) {
                this.style.background = 'red';
            } else {
                this.style.background = 'none';
            }
        });

        // Close menu when navigation link is clicked
        const navLinks = navList.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navList.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!menuToggle.contains(event.target) && !navList.contains(event.target)) {
                navList.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    }
}

// Info Cards Slider functionality
function initInfoSlider() {
    const sliderTrack = document.querySelector('.info-slider-track');

    if (!sliderTrack) return;

    // Pause animation on hover
    sliderTrack.addEventListener('mouseenter', () => {
        sliderTrack.style.animationPlayState = 'paused';
    });

    sliderTrack.addEventListener('mouseleave', () => {
        sliderTrack.style.animationPlayState = 'running';
    });

    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    let isTouch = false;

    sliderTrack.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        isTouch = true;
        sliderTrack.style.animationPlayState = 'paused';
    });

    sliderTrack.addEventListener('touchmove', (e) => {
        if (!isTouch) return;
        e.preventDefault();
        touchEndX = e.changedTouches[0].screenX;
    });

    sliderTrack.addEventListener('touchend', (e) => {
        if (!isTouch) return;
        isTouch = false;
        sliderTrack.style.animationPlayState = 'running';

        // Optional: Add haptic feedback for touch devices
        if (navigator.vibrate) {
            navigator.vibrate(10);
        }
    });

    // Accessibility: Reduce motion for users who prefer it
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        sliderTrack.style.animation = 'none';
        console.log('Animation disabled due to user preference for reduced motion');
    }
}

// Initialize Functions
document.addEventListener('DOMContentLoaded', function() {
    initSmoothScrolling();
    initMobileMenu();
    initInfoSlider();

    // Show default dining category
    showDining('rooftop');

    // Event delegation for modal cards
    document.addEventListener('click', function(e) {
        // Modal triggers
        if (e.target.closest('.info-card')) {
            const card = e.target.closest('.info-card');
            const modalType = card.dataset.modal;
            if (modalType) {
                openModal(modalType);
            }
        }

        // Experience bookings
        if (e.target.classList.contains('book-btn')) {
            const experienceId = e.target.dataset.experience;
            if (experienceId) {
                bookExperience('platinumlist', experienceId);
            }
        }

        // Hotel category selection
        if (e.target.classList.contains('category-btn')) {
            const category = e.target.dataset.category;
            if (category) {
                searchHotels(category);
            }
        }

        // Dining tab selection
        if (e.target.classList.contains('tab-btn')) {
            const category = e.target.dataset.category;
            if (category) {
                showDining(category, e.target);
            }
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    // Lazy load images when they come into viewport
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});

// Add CSS for venue cards dynamically
const additionalCSS = `
.venues-list {
    display: grid;
    gap: var(--space-lg);
    margin-top: var(--space-lg);
}

.venue-card {
    background: white;
    border: 1px solid var(--border-light);
    border-radius: var(--radius-sm);
    padding: var(--space-lg);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.venue-card:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
}

.venue-card h4 {
    color: var(--text-primary);
    font-weight: 600;
    margin-bottom: var(--space-sm);
}

.venue-type {
    color: var(--primary);
    font-weight: 500;
    font-size: 14px;
    margin-bottom: var(--space-sm);
}

.venue-description {
    color: var(--text-secondary);
    font-size: 14px;
    line-height: 1.5;
}

@media (min-width: 768px) {
    .venues-list {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
}
`;

// Inject additional CSS
const style = document.createElement('style');
style.textContent = additionalCSS;
document.head.appendChild(style);