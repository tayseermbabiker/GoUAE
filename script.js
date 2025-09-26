// Modal Content - Single source of truth for all modal data
const modalContent = {
    visa: {
        title: 'Visa & Entry',
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
        title: 'Alcohol Rules & Guidelines',
        content: `
            <div class="modal-section">
                <div class="alcohol-laws">
                    <div class="law-card legal">
                        <h5>Where Alcohol IS Legal</h5>
                        <ul>
                            <li><strong>Licensed Hotels:</strong> Bars, restaurants, room service</li>
                            <li><strong>Licensed Restaurants:</strong> Many have alcohol licenses</li>
                            <li><strong>Private Clubs:</strong> Members and guests only</li>
                            <li><strong>Airport Duty-Free:</strong> Purchase and consumption areas</li>
                            <li><strong>Home Consumption:</strong> If you have a license (residents)</li>
                        </ul>
                    </div>
                    <div class="law-card illegal">
                        <h5>Where Alcohol IS ILLEGAL</h5>
                        <ul>
                            <li><strong>Public Spaces:</strong> Streets, beaches, parks - NEVER</li>
                            <li><strong>Unlicensed Venues:</strong> Most local restaurants/cafes</li>
                            <li><strong>Cars:</strong> Open containers illegal, DUI laws strict</li>
                            <li><strong>Sharjah Emirate:</strong> Completely dry - no alcohol anywhere</li>
                            <li><strong>Near Mosques:</strong> Especially during prayer times</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4>Tourist Guidelines</h4>
                <div class="tourist-alcohol">
                    <div class="guideline-card tourists">
                        <h5>For Tourists</h5>
                        <ul>
                            <li><strong>No License Required:</strong> Tourists can drink in licensed venues</li>
                            <li><strong>Age Requirement:</strong> Must be 21+ (strict ID checks)</li>
                            <li><strong>Hotel Bars:</strong> Easiest and safest option</li>
                            <li><strong>Restaurant Dining:</strong> Many restaurants serve alcohol with meals</li>
                        </ul>
                    </div>
                    <div class="guideline-card purchasing">
                        <h5>Purchasing Alcohol</h5>
                        <ul>
                            <li><strong>Duty-Free:</strong> Best option for tourists (airport/departure)</li>
                            <li><strong>Liquor Stores:</strong> MMI, African+Eastern (license needed for residents)</li>
                            <li><strong>Hotels:</strong> Can purchase from hotel bars/restaurants</li>
                            <li><strong>Take Away:</strong> Some hotels allow take-away purchases</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4>Serious Violations & Penalties</h4>
                <div class="violations-alcohol">
                    <div class="violation-card major">
                        <h5>Major Offenses</h5>
                        <ul>
                            <li><strong>Public Intoxication:</strong> Arrest, fine, possible deportation</li>
                            <li><strong>Drunk Driving:</strong> Jail time, heavy fines, deportation</li>
                            <li><strong>Public Drinking:</strong> AED 2,000 fine + legal issues</li>
                            <li><strong>Disturbing Peace:</strong> While drunk - serious consequences</li>
                        </ul>
                    </div>
                    <div class="violation-card warning">
                        <h5>Warning Situations</h5>
                        <ul>
                            <li><strong>Loud Behavior:</strong> Even in licensed venues</li>
                            <li><strong>Inappropriate Dress:</strong> While intoxicated in public</li>
                            <li><strong>Disrespecting Culture:</strong> Cultural insensitivity while drinking</li>
                            <li><strong>Taking Alcohol Outside:</strong> Licensed venues</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4>Emirate-Specific Rules</h4>
                <div class="emirate-rules">
                    <div class="emirate-card dubai">
                        <h5>Dubai</h5>
                        <p><strong>Liberal:</strong> Many licensed venues, hotel bars, restaurants widely available</p>
                    </div>
                    <div class="emirate-card abudhabi">
                        <h5>Abu Dhabi</h5>
                        <p><strong>Moderate:</strong> Licensed venues available, fewer than Dubai but reasonable selection</p>
                    </div>
                    <div class="emirate-card sharjah">
                        <h5>Sharjah</h5>
                        <p><strong>Dry Emirate:</strong> NO ALCOHOL anywhere - completely prohibited for everyone</p>
                    </div>
                    <div class="emirate-card others">
                        <h5>Other Emirates</h5>
                        <p><strong>Limited:</strong> Few licensed venues, mostly in luxury hotels</p>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4>Complete Ramadan Travel Guide</h4>
                <div class="ramadan-reality">
                    <div class="reality-note">
                        <p><strong>Good News:</strong> UAE is extremely welcoming to tourists during Ramadan! You'll actually experience unique cultural richness while enjoying modified services.</p>
                    </div>
                </div>

                <div class="ramadan-rules">
                    <div class="ramadan-info critical">
                        <h5>What You Can't Do During Daylight Hours</h5>
                        <ul>
                            <li><strong>Eat/drink in public spaces</strong> - Streets, parks, public transport, malls (some designated areas excepted)</li>
                            <li><strong>Smoking in public</strong> - No smoking outdoors during daylight</li>
                            <li><strong>Loud music/partying</strong> - Respect the spiritual atmosphere</li>
                            <li><strong>Alcohol service</strong> - No alcohol anywhere during day, even hotels</li>
                        </ul>
                    </div>

                    <div class="ramadan-info allowed">
                        <h5>What You CAN Do - Tourist-Friendly Options</h5>
                        <ul>
                            <li><strong>Hotel room dining</strong> - Room service continues normally, eat privately</li>
                            <li><strong>Designated mall areas</strong> - Many malls have curtained restaurant sections for tourists</li>
                            <li><strong>Tourist restaurant areas</strong> - Some restaurants serve tourists in private sections</li>
                            <li><strong>Beach club private areas</strong> - Many continue service in secluded areas</li>
                            <li><strong>Airport restaurants</strong> - Continue normal service for travelers</li>
                        </ul>
                    </div>
                </div>

                <div class="ramadan-schedule">
                    <h5>Daily Ramadan Schedule for Tourists</h5>
                    <div class="schedule-grid">
                        <div class="schedule-item">
                            <h6>Dawn-Sunset (Fasting Hours)</h6>
                            <ul>
                                <li><strong>Public behavior:</strong> Be respectful, no eating/drinking publicly</li>
                                <li><strong>Hotels:</strong> Room service available, pool/spa usually open</li>
                                <li><strong>Attractions:</strong> Most open with shorter hours</li>
                                <li><strong>Shopping:</strong> Malls open but restaurants may be curtained</li>
                            </ul>
                        </div>
                        <div class="schedule-item">
                            <h6>Sunset-Dawn (After Iftar)</h6>
                            <ul>
                                <li><strong>Everything opens!</strong> Restaurants, bars, normal service resumes</li>
                                <li><strong>Festive atmosphere:</strong> Special Ramadan decorations, cultural events</li>
                                <li><strong>Extended hours:</strong> Many places stay open later than usual</li>
                                <li><strong>Special experiences:</strong> Iftar buffets, cultural performances</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="ramadan-experiences">
                    <h5>Special Ramadan Experiences for Tourists</h5>
                    <div class="experience-grid">
                        <div class="experience-item">
                            <h6>Iftar Buffets</h6>
                            <p>Join the traditional fast-breaking meal at hotel restaurants. Amazing cultural experience with traditional Emirati dishes.</p>
                            <p><strong>Cost:</strong> AED 150-400 per person | <strong>Time:</strong> Sunset timing (varies by date)</p>
                        </div>
                        <div class="experience-item">
                            <h6>Cultural Events</h6>
                            <p>Special Ramadan entertainment, traditional music, poetry readings, and cultural exhibitions throughout UAE.</p>
                            <p><strong>Cost:</strong> Usually free | <strong>Where:</strong> Heritage sites, cultural centers</p>
                        </div>
                        <div class="experience-item">
                            <h6>Ramadan Night Markets</h6>
                            <p>Special evening markets with traditional crafts, foods, and cultural items. Authentic local atmosphere.</p>
                            <p><strong>Cost:</strong> Varies by purchase | <strong>Time:</strong> After sunset until late</p>
                        </div>
                    </div>
                </div>

                <div class="ramadan-qa">
                    <h5>Common Tourist Questions Answered</h5>
                    <div class="qa-grid">
                        <div class="qa-item">
                            <h6>Q: "Will restaurants be closed?"</h6>
                            <p><strong>A:</strong> No! Most restaurants open after sunset with special Ramadan menus. Some serve tourists discreetly during day in private areas.</p>
                        </div>
                        <div class="qa-item">
                            <h6>Q: "Can I eat during the day?"</h6>
                            <p><strong>A:</strong> Yes, privately! Hotel rooms, designated tourist areas, and some restaurants serve in curtained sections.</p>
                        </div>
                        <div class="qa-item">
                            <h6>Q: "Should I avoid traveling during Ramadan?"</h6>
                            <p><strong>A:</strong> Actually, it's fascinating! You'll experience unique culture, beautiful decorations, and special events you can't see other times.</p>
                        </div>
                        <div class="qa-item">
                            <h6>Q: "What about attractions and activities?"</h6>
                            <p><strong>A:</strong> Most continue with modified hours. Many indoor attractions (malls, museums) operate normally.</p>
                        </div>
                    </div>
                </div>

                <div class="ramadan-tips">
                    <h5>Smart Ramadan Travel Tips</h5>
                    <div class="tips-grid">
                        <div class="tip-item">
                            <h6>Hotel Strategy</h6>
                            <ul>
                                <li>Choose hotels with good room service</li>
                                <li>Book hotels with beach/pool access</li>
                                <li>Many offer special Ramadan packages</li>
                            </ul>
                        </div>
                        <div class="tip-item">
                            <h6>Practical Planning</h6>
                            <ul>
                                <li>Download prayer time apps to know Iftar timing</li>
                                <li>Stock snacks/water in your hotel room</li>
                                <li>Plan indoor activities for daytime</li>
                            </ul>
                        </div>
                        <div class="tip-item">
                            <h6>Cultural Respect</h6>
                            <ul>
                                <li>Dress more modestly during Ramadan</li>
                                <li>Be quieter in public during day</li>
                                <li>Learn "Ramadan Kareem" greeting</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal-section highlight">
                <h4>Smart Drinking Tips</h4>
                <div class="drinking-tips">
                    <div class="tip">
                        <p><strong>Stick to Hotels:</strong> Safest option. Hotel bars, restaurants, and room service are worry-free.</p>
                    </div>
                    <div class="tip">
                        <p><strong>Never Drive:</strong> UAE has zero tolerance for drinking and driving. Use taxis/Uber always.</p>
                    </div>
                    <div class="tip">
                        <p><strong>Know Your Limits:</strong> Getting drunk in public can lead to serious legal trouble.</p>
                    </div>
                    <div class="tip">
                        <p><strong>Carry ID:</strong> Always have passport/ID when drinking. Age checks are strict.</p>
                    </div>
                </div>
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

                <div class="emergency-priority">
                    <h5>Critical Emergency Numbers</h5>
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
                                <p class="contact-note">Fire, rescue, and hazardous situations</p>
                            </div>
                        </div>
                        <div class="contact-card tourist">
                            <div class="contact-info">
                                <h6>24/7 Tourist Helpline</h6>
                                <p class="contact-number">800-353-353</p>
                                <p class="contact-note">English support, travel issues, complaints</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="medical-contacts">
                    <h5>Major Hospital Emergency Numbers</h5>
                    <div class="hospital-grid">
                        <div class="hospital-card dubai">
                            <h6>Dubai Hospitals</h6>
                            <ul>
                                <li><strong>Dubai Hospital:</strong> +971-4-219-5000</li>
                                <li><strong>American Hospital:</strong> +971-4-336-7777</li>
                                <li><strong>Mediclinic City Hospital:</strong> +971-4-435-9999</li>
                                <li><strong>NMC Royal Hospital:</strong> +971-4-336-3333</li>
                            </ul>
                        </div>
                        <div class="hospital-card abudhabi">
                            <h6>Abu Dhabi Hospitals</h6>
                            <ul>
                                <li><strong>Cleveland Clinic:</strong> +971-2-501-9999</li>
                                <li><strong>Sheikh Khalifa Medical City:</strong> +971-2-610-2000</li>
                                <li><strong>American Hospital:</strong> +971-2-501-5000</li>
                                <li><strong>Mediclinic Airport Road:</strong> +971-2-406-7777</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="emergency-tips">
                    <h5>Emergency Situation Tips</h5>
                    <div class="situation-tips">
                        <div class="tip-card emergency">
                            <h6>If Arrested</h6>
                            <ul>
                                <li>Ask to contact your embassy immediately</li>
                                <li>Do not sign anything you don't understand</li>
                                <li>Request an English-speaking lawyer</li>
                                <li>Remain calm and respectful</li>
                            </ul>
                        </div>
                        <div class="tip-card medical">
                            <h6>Medical Emergency</h6>
                            <ul>
                                <li>Call 998 immediately</li>
                                <li>Have your passport/ID ready</li>
                                <li>Know your hotel address in Arabic if possible</li>
                                <li>Your travel insurance information handy</li>
                            </ul>
                        </div>
                        <div class="tip-card practical">
                            <h6>Before You Need Help</h6>
                            <ul>
                                <li>Screenshot this page for offline access</li>
                                <li>Save your embassy number in your phone</li>
                                <li>Keep a copy of your passport in hotel safe</li>
                                <li>Share your itinerary with someone at home</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4>Solo Female Travelers - Specific Guidance</h4>
                <div class="female-safety">
                    <div class="safety-reality">
                        <h5>Reality Check for International Women</h5>
                        <p>UAE consistently ranks as one of the safest countries globally for solo female travelers.</p>
                    </div>
                    <div class="female-tips-grid">
                        <div class="female-tip-card reassuring">
                            <h6>What You CAN Do Safely</h6>
                            <ul>
                                <li><strong>Walk alone at night</strong> in tourist areas (Marina, Downtown, JBR)</li>
                                <li><strong>Take taxis alone</strong> - all drivers are vetted and professional</li>
                                <li><strong>Eat alone</strong> at restaurants - completely normal</li>
                                <li><strong>Use dating apps</strong> - but meet in public places</li>
                                <li><strong>Wear normal clothes</strong> in tourist zones</li>
                            </ul>
                        </div>
                        <div class="female-tip-card cautious">
                            <h6>Be Extra Cautious</h6>
                            <ul>
                                <li><strong>Traditional markets (souks)</strong> - go during busy hours</li>
                                <li><strong>Remote desert areas</strong> - join group tours</li>
                                <li><strong>Construction/industrial areas</strong> - avoid completely</li>
                                <li><strong>Late night beach walks</strong> - stick to hotel areas</li>
                                <li><strong>Over-drinking</strong> - you're more vulnerable when intoxicated</li>
                            </ul>
                        </div>
                    </div>
                    <div class="female-specific-advice">
                        <h6>Female-Specific Advice</h6>
                        <div class="advice-grid">
                            <div class="advice-item">
                                <strong>Harassment:</strong> Extremely rare but report immediately to police if it occurs
                            </div>
                            <div class="advice-item">
                                <strong>Accommodation:</strong> All major hotels have female-only floors and services
                            </div>
                            <div class="advice-item">
                                <strong>Transportation:</strong> Metro has women-only carriages during peak hours
                            </div>
                            <div class="advice-item">
                                <strong>Cultural respect:</strong> Modest dress appreciated, but international styles fine
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4>Smart Safety Tips</h4>
                <div class="tips-grid">
                    <div class="tip-card">
                        <p>Share your location with family using WhatsApp or Google Maps</p>
                    </div>
                    <div class="tip-card">
                        <p>Use contactless payments - safer and widely accepted</p>
                    </div>
                    <div class="tip-card">
                        <p>Stay hydrated and seek shade during peak sun hours (11am-4pm)</p>
                    </div>
                    <div class="tip-card">
                        <p>Download UAE emergency apps: Dubai Police, ADPD for Abu Dhabi</p>
                    </div>
                </div>
            </div>

            <div class="modal-section highlight">
                <h4>Traveler Testimonials</h4>
                <blockquote>
                    "I'm a solo female traveler and felt safer in Dubai than in my hometown. Police were incredibly helpful when I needed directions!"
                    <cite>- Sarah M., London</cite>
                </blockquote>
                <blockquote>
                    "Lost my wallet at Dubai Mall. Security found it within 30 minutes with everything intact. Amazing!"
                    <cite>- Mike T., Sydney</cite>
                </blockquote>
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
                        <p><strong>Best:</strong> Peak: Nov-Mar (Dubai Shopping Festival, etc.)</p>
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
        title: 'Dress Code & Culture',
        content: `
            <div class="modal-section">
                <div class="dress-reality">
                    <div class="reality-note">
                        <p><strong>Good News!</strong> Dubai and Abu Dhabi are much more relaxed than you've heard. 85% of residents are expats from 200+ countries.</p>
                    </div>
                </div>
                <div class="dress-grid">
                    <div class="dress-card appropriate">
                        <div class="dress-icon"></div>
                        <h5>What Actually Works</h5>
                        <ul>
                            <li><strong>Malls:</strong> T-shirts, jeans, sundresses, shorts (knee-length)</li>
                            <li><strong>Restaurants:</strong> Same as any international city - smart casual</li>
                            <li><strong>Hotels:</strong> Anything goes - bikinis at pools, shorts in lobbies</li>
                            <li><strong>Friday Brunches:</strong> International visitors wear short skirts, low-cut tops</li>
                            <li><strong>Beach Clubs:</strong> Standard swimwear, cover-ups for walking</li>
                        </ul>
                    </div>
                    <div class="dress-card inappropriate">
                        <div class="dress-icon"></div>
                        <h5>What Gets Attention (Not Arrest)</h5>
                        <ul>
                            <li><strong>See-through clothing</strong> - Stares, not fines</li>
                            <li><strong>Very short shorts</strong> - Looks out of place, not illegal</li>
                            <li><strong>Low necklines</strong> - Fine in hotels, avoid in traditional areas</li>
                            <li><strong>Swimwear in malls</strong> - Actually illegal, cover up</li>
                            <li><strong>Offensive slogans</strong> - Could cause problems</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4>Location-Specific Dress Guide</h4>
                <div class="location-dress">
                    <div class="location-card relaxed">
                        <h5>Most Relaxed Areas</h5>
                        <ul>
                            <li><strong>Dubai Marina & JBR:</strong> Beach vibe, very tourist-friendly</li>
                            <li><strong>Downtown Dubai:</strong> International crowd, dress normally</li>
                            <li><strong>Palm Jumeirah:</strong> Resort casual, swimwear at beaches</li>
                            <li><strong>Hotel zones:</strong> International standards apply</li>
                        </ul>
                    </div>
                    <div class="location-card moderate">
                        <h5>More Conservative Areas</h5>
                        <ul>
                            <li><strong>Old Dubai (Deira/Bur Dubai):</strong> Cover shoulders/knees</li>
                            <li><strong>Sharjah:</strong> Most conservative emirate</li>
                            <li><strong>Traditional souks:</strong> Respectful dress appreciated</li>
                            <li><strong>Government areas:</strong> Smart casual minimum</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4>Religious Sites Dress Code</h4>
                <div class="religious-dress">
                    <div class="dress-requirements">
                        <h5>Mosque Visits (Required)</h5>
                        <div class="requirements-grid">
                            <div class="requirement-card women">
                                <h6>Women</h6>
                                <ul>
                                    <li>Long sleeves (wrists covered)</li>
                                    <li>Long pants/skirt (ankles covered)</li>
                                    <li>Headscarf provided at entrance</li>
                                    <li>No tight-fitting clothes</li>
                                </ul>
                            </div>
                            <div class="requirement-card men">
                                <h6>Men</h6>
                                <ul>
                                    <li>Long pants (no shorts)</li>
                                    <li>Covered shoulders</li>
                                    <li>Closed shoes preferred</li>
                                    <li>Remove hat/cap inside</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4>Beach & Pool Guidelines</h4>
                <div class="beach-guidelines">
                    <div class="guideline-card allowed">
                        <h5>Beach Areas</h5>
                        <ul>
                            <li>All standard swimwear is fine</li>
                            <li>Bikinis and swim shorts allowed</li>
                            <li>Sunbathing in swimwear is normal</li>
                            <li>Cover up when leaving beach area</li>
                        </ul>
                    </div>
                    <div class="guideline-card forbidden">
                        <h5>Never Allowed</h5>
                        <ul>
                            <li><strong>Topless sunbathing</strong> - Illegal everywhere</li>
                            <li><strong>Nude swimming</strong> - Serious criminal offense</li>
                            <li><strong>Thong swimwear</strong> - Not culturally appropriate</li>
                            <li><strong>Walking to/from beach</strong> in just swimwear</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="modal-section highlight">
                <h4>Pro Tips</h4>
                <div class="dress-tips">
                    <div class="tip">
                        <span class="tip-emoji"></span>
                        <p><strong>Shopping:</strong> Most malls have dress code signs. When in doubt, cover shoulders and knees.</p>
                    </div>
                    <div class="tip">
                        <span class="tip-emoji"></span>
                        <p><strong>Weather:</strong> Light, breathable fabrics work best. Linen and cotton are perfect.</p>
                    </div>
                    <div class="tip">
                        <span class="tip-emoji"></span>
                        <p><strong>Local shopping:</strong> Buy beautiful, appropriate clothing at Dubai's textile souks!</p>
                    </div>
                </div>
            </div>
        `
    },
    currency: {
        title: 'Currency & Payment Methods',
        content: `
            <div class="modal-section">
                <div class="currency-info">
                    <div class="currency-card">
                        <div class="currency-icon"></div>
                        <h5>UAE Dirham (AED)</h5>
                        <ul>
                            <li><strong>Exchange Rate:</strong> ~3.67 AED = 1 USD (varies)</li>
                            <li><strong>Coins:</strong> 25 fils, 50 fils, 1 AED</li>
                            <li><strong>Notes:</strong> 5, 10, 20, 50, 100, 200, 500, 1000 AED</li>
                            <li><strong>Stability:</strong> Pegged to USD - very stable</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4>Payment Methods Accepted</h4>
                <div class="payment-methods">
                    <div class="payment-card widely-accepted">
                        <div class="payment-icon"></div>
                        <h5>Credit/Debit Cards</h5>
                        <div class="acceptance-badge excellent">Excellent Coverage</div>
                        <ul>
                            <li><strong>Visa & Mastercard:</strong> Accepted everywhere</li>
                            <li><strong>American Express:</strong> Most places (some exceptions)</li>
                            <li><strong>Contactless:</strong> Widely available</li>
                            <li><strong>ATMs:</strong> Everywhere, English language available</li>
                        </ul>
                    </div>
                    <div class="payment-card digital">
                        <div class="payment-icon"></div>
                        <h5>Digital Payments</h5>
                        <div class="acceptance-badge good">Growing Fast</div>
                        <ul>
                            <li><strong>Apple Pay:</strong> Major retailers and restaurants</li>
                            <li><strong>Google Pay:</strong> Increasingly accepted</li>
                            <li><strong>Samsung Pay:</strong> Limited but growing</li>
                            <li><strong>Local apps:</strong> Careem Pay, Noon Pay</li>
                        </ul>
                    </div>
                    <div class="payment-card cash">
                        <div class="payment-icon"></div>
                        <h5>Cash</h5>
                        <div class="acceptance-badge universal">Always Accepted</div>
                        <ul>
                            <li><strong>Souks & Markets:</strong> Often preferred for bargaining</li>
                            <li><strong>Taxis:</strong> Always accepted, sometimes preferred</li>
                            <li><strong>Tips:</strong> Cash is customary</li>
                            <li><strong>Small vendors:</strong> Street food, small shops</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4>Where to Exchange Money</h4>
                <div class="exchange-options">
                    <div class="exchange-card best-rate">
                        <h5>Exchange Houses</h5>
                        <div class="rate-badge best">Best Rates</div>
                        <p>Al Ansari Exchange, UAE Exchange, Al Rostamani - found in malls and streets</p>
                    </div>
                    <div class="exchange-card convenient">
                        <h5>Hotels</h5>
                        <div class="rate-badge poor">Poor Rates</div>
                        <p>Convenient but rates are typically 3-5% worse than exchange houses</p>
                    </div>
                    <div class="exchange-card atm">
                        <h5>ATMs</h5>
                        <div class="rate-badge good">Good Rates</div>
                        <p>Usually better than hotels, but check your bank's international fees</p>
                    </div>
                    <div class="exchange-card airport">
                        <h5>Airport</h5>
                        <div class="rate-badge average">Average Rates</div>
                        <p>Convenient for arrival, but rates not as good as city exchange houses</p>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4>Realistic Daily Budget Guide - What Things Actually Cost</h4>
                <div class="budget-reality">
                    <div class="reality-note">
                        <p><strong>Truth Check:</strong> Based on actual tourist spending data from 2024. Dubai isn't as expensive as you think - if you know where to go!</p>
                    </div>
                </div>

                <div class="budget-guide">
                    <div class="budget-category budget">
                        <h5>Budget Traveler (AED 200-400/day = $55-110/day)</h5>
                        <div class="detailed-breakdown">
                            <div class="cost-item">
                                <h6>Food (AED 60-120/day)</h6>
                                <ul>
                                    <li><strong>Breakfast:</strong> Hotel buffet AED 25 OR mall food court AED 15</li>
                                    <li><strong>Lunch:</strong> Food court meal AED 20-35 (Burger King, local cafeterias)</li>
                                    <li><strong>Dinner:</strong> Local restaurant AED 25-60 (huge portions, authentic)</li>
                                    <li><strong>Drinks:</strong> Water AED 1, soft drinks AED 8-12</li>
                                    <li><strong>Pro tip:</strong> Happy hour at restaurants (5-8PM) = 50% off!</li>
                                </ul>
                            </div>
                            <div class="cost-item">
                                <h6>Transport (AED 25-50/day)</h6>
                                <ul>
                                    <li><strong>Metro day pass:</strong> AED 20 (unlimited travel)</li>
                                    <li><strong>Short taxi rides:</strong> AED 12-25 (when metro doesn't reach)</li>
                                    <li><strong>Airport transfer:</strong> Metro AED 8, Taxi AED 80-120</li>
                                </ul>
                            </div>
                            <div class="cost-item">
                                <h6>Attractions (AED 30-100/day)</h6>
                                <ul>
                                    <li><strong>Free:</strong> Beaches, Dubai Fountain, walking tours</li>
                                    <li><strong>Budget sites:</strong> Dubai Frame AED 50, Al Fahidi Historical AED 3</li>
                                    <li><strong>Major attractions:</strong> Burj Khalifa basic AED 149</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="budget-category mid-range">
                        <h5>Mid-Range Tourist (AED 500-900/day = $135-245/day)</h5>
                        <div class="detailed-breakdown">
                            <div class="cost-item">
                                <h6>Food (AED 150-300/day)</h6>
                                <ul>
                                    <li><strong>Breakfast:</strong> Hotel restaurant AED 50-80</li>
                                    <li><strong>Lunch:</strong> Mall restaurant AED 60-120 (international chains)</li>
                                    <li><strong>Dinner:</strong> Nice restaurant AED 80-150 per person</li>
                                    <li><strong>Alcohol:</strong> Beer AED 25-45, cocktails AED 50-80 at hotels</li>
                                    <li><strong>Reality:</strong> Same quality as home, just 20-30% more expensive</li>
                                </ul>
                            </div>
                            <div class="cost-item">
                                <h6>Transport (AED 80-150/day)</h6>
                                <ul>
                                    <li><strong>Taxi/Uber mix:</strong> AED 15-35 per ride</li>
                                    <li><strong>Longer trips:</strong> Marina to Downtown AED 60-80</li>
                                    <li><strong>Car rental:</strong> AED 120/day + parking AED 20-40</li>
                                </ul>
                            </div>
                            <div class="cost-item">
                                <h6>Activities (AED 200-400/day)</h6>
                                <ul>
                                    <li><strong>Desert Safari:</strong> AED 200-350 (group tours)</li>
                                    <li><strong>Burj Khalifa premium:</strong> AED 300-500</li>
                                    <li><strong>Beach club day:</strong> AED 150-300 (includes food/drink credit)</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="budget-category luxury">
                        <h5>Luxury Experience (AED 1000+/day = $270+/day)</h5>
                        <div class="detailed-breakdown">
                            <div class="cost-item">
                                <h6>Dining (AED 400-800/day)</h6>
                                <ul>
                                    <li><strong>Hotel breakfast:</strong> AED 150-250 (5-star buffets)</li>
                                    <li><strong>Fine dining lunch:</strong> AED 200-400 per person</li>
                                    <li><strong>Celebrity chef dinner:</strong> AED 300-600 per person</li>
                                    <li><strong>Premium alcohol:</strong> Wine AED 80-150/glass, premium cocktails AED 100+</li>
                                    <li><strong>Reality check:</strong> Burj Al Arab afternoon tea costs AED 630!</li>
                                </ul>
                            </div>
                            <div class="cost-item">
                                <h6>Experiences (AED 500-1500/day)</h6>
                                <ul>
                                    <li><strong>Private desert safari:</strong> AED 800-1200</li>
                                    <li><strong>Helicopter tour:</strong> AED 650 (12 minutes) to AED 2000 (45 minutes)</li>
                                    <li><strong>Yacht charter:</strong> AED 1500-5000 for half day</li>
                                    <li><strong>Spa treatments:</strong> AED 300-800 for signature treatments</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="hidden-costs">
                    <h5>Hidden Costs & Tourist Traps</h5>
                    <div class="cost-warnings">
                        <div class="warning-item">
                            <h6>Alcohol Reality Check</h6>
                            <p><strong>Hotel bars:</strong> Beer AED 35-55, Wine AED 60-120/glass. <strong>Cheaper options:</strong> Sports bars AED 20-35/beer</p>
                        </div>
                        <div class="warning-item">
                            <h6>Parking Everywhere</h6>
                            <p><strong>Malls:</strong> First 3 hours free, then AED 5/hour. <strong>Beach/attractions:</strong> AED 20-40/day. <strong>Hotels:</strong> AED 50-150/night</p>
                        </div>
                        <div class="warning-item">
                            <h6>Service Charges</h6>
                            <p><strong>Restaurants:</strong> 10% service charge + 5% VAT automatically added. <strong>Hotels:</strong> 10% service + 6% municipality tax + 5% VAT</p>
                        </div>
                        <div class="warning-item">
                            <h6>Shopping "Deals"</h6>
                            <p><strong>Gold Souq:</strong> Start negotiating at 50% of asking price. <strong>Malls:</strong> Same international prices, no special "Dubai discounts"</p>
                        </div>
                    </div>
                </div>

                <div class="money-saving-tips">
                    <h5>💡 Money-Saving Insider Tips</h5>
                    <div class="saving-tips-grid">
                        <div class="tip-item">
                            <h6>🍽️ Food Hacks</h6>
                            <ul>
                                <li>Mall food courts = international quality, local prices</li>
                                <li>Happy hours 4-8PM = 50% off drinks, 30% off food</li>
                                <li>Hotel breakfasts are filling - skip lunch</li>
                                <li>Pakistani/Indian restaurants = huge portions, authentic, cheap</li>
                            </ul>
                        </div>
                        <div class="tip-item">
                            <h6>Transport Savings</h6>
                            <ul>
                                <li>Metro covers 90% of tourist attractions</li>
                                <li>Walk in malls (many are connected via bridges)</li>
                                <li>Careem often cheaper than Uber for longer trips</li>
                                <li>Hotel shuttles to malls usually free</li>
                            </ul>
                        </div>
                        <div class="tip-item">
                            <h6>🎯 Activity Deals</h6>
                            <ul>
                                <li>Buy tickets online = 15-20% savings</li>
                                <li>Groupon UAE has genuine deals</li>
                                <li>Free activities: beaches, fountains, mall entertainment</li>
                                <li>Visit during summer = 70% hotel savings</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4>Tipping Culture</h4>
                <div class="tipping-guide">
                    <div class="tip-category">
                        <h5>🍽️ Restaurants</h5>
                        <p><strong>10-15%</strong> if service charge not included (check bill first)</p>
                    </div>
                    <div class="tip-category">
                        <h5>🚕 Taxis</h5>
                        <p><strong>Round up</strong> or add AED 2-5 for good service</p>
                    </div>
                    <div class="tip-category">
                        <h5>🏨 Hotels</h5>
                        <p><strong>AED 5-20</strong> per night for housekeeping, AED 10-20 for bellhops</p>
                    </div>
                    <div class="tip-category">
                        <h5>💇 Services</h5>
                        <p><strong>10-20%</strong> for spa services, hair salons, etc.</p>
                    </div>
                </div>
            </div>

            <div class="modal-section highlight">
                <h4>Money-Saving Tips</h4>
                <div class="money-tips">
                    <div class="tip">
                        <span class="tip-emoji"></span>
                        <p><strong>Shopping:</strong> Dubai Shopping Festival (Jan-Feb) and Summer Surprises (Jul-Aug) offer massive discounts!</p>
                    </div>
                    <div class="tip">
                        <span class="tip-emoji"></span>
                        <p><strong>Food:</strong> Mall food courts are budget-friendly. Happy hours at restaurants offer great deals.</p>
                    </div>
                    <div class="tip">
                        <span class="tip-emoji"></span>
                        <p><strong>Attractions:</strong> Buy combo tickets for multiple attractions. Book online for discounts.</p>
                    </div>
                    <div class="tip">
                        <span class="tip-emoji"></span>
                        <p><strong>Cards:</strong> Notify your bank before traveling to avoid card blocks. Check international fees.</p>
                    </div>
                </div>
            </div>
        `
    },
    transport: {
        title: 'Transportation Guide',
        content: `
            <div class="modal-section">
                <div class="transport-grid">
                    <div class="transport-card metro">
                        <div class="transport-icon"></div>
                        <h5>Dubai Metro</h5>
                        <div class="transport-badge recommended">Most Extensive</div>
                        <ul>
                            <li><strong>Routes:</strong> Red & Green Lines cover major attractions</li>
                            <li><strong>Cost:</strong> AED 3-8 per journey</li>
                            <li><strong>Hours:</strong> 5AM-12AM (Thu-Fri till 1AM)</li>
                            <li><strong>Special:</strong> Gold Class available (more expensive, less crowded)</li>
                        </ul>
                    </div>
                    <div class="transport-card bus">
                        <div class="transport-icon"></div>
                        <h5>Abu Dhabi Bus Network</h5>
                        <div class="transport-badge reliable">Capital's Choice</div>
                        <ul>
                            <li><strong>Coverage:</strong> Comprehensive city-wide network</li>
                            <li><strong>Cost:</strong> AED 2-4 per journey with Hafilat card</li>
                            <li><strong>Routes:</strong> Airport, Corniche, Yas Island, Marina Mall</li>
                            <li><strong>Tourist Option:</strong> Big Bus Tours AED 189 (hop-on-hop-off)</li>
                            <li><strong>Women & Children:</strong> Dedicated carriages available</li>
                        </ul>
                    </div>
                    <div class="transport-card bus">
                        <div class="transport-icon"></div>
                        <h5>Dubai Bus</h5>
                        <div class="transport-badge good">Budget Friendly</div>
                        <ul>
                            <li><strong>Coverage:</strong> Extensive network citywide</li>
                            <li><strong>Cost:</strong> AED 2-7 per journey</li>
                            <li><strong>Features:</strong> Air-conditioned, wifi on some routes</li>
                            <li><strong>Payment:</strong> Nol Card required</li>
                            <li><strong>Peak times:</strong> Can be crowded 7-9AM, 5-7PM</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4>Taxi & Ride-Sharing</h4>
                <div class="ride-options">
                    <div class="ride-card official">
                        <div class="ride-icon"></div>
                        <h5>Official Dubai Taxi</h5>
                        <ul>
                            <li><strong>Starting fare:</strong> AED 3-5</li>
                            <li><strong>Rate:</strong> AED 1.96/km</li>
                            <li><strong>Booking:</strong> Street hail, phone, or app</li>
                            <li><strong>Women-only:</strong> Pink taxis available</li>
                            <li><strong>Payment:</strong> Cash or card accepted</li>
                        </ul>
                    </div>
                    <div class="ride-card ride-share">
                        <div class="ride-icon"></div>
                        <h5>Uber, Careem & InDrive</h5>
                        <ul>
                            <li><strong>Convenience:</strong> App-based, no haggling</li>
                            <li><strong>Cost:</strong> Competitive with taxis</li>
                            <li><strong>Popular:</strong> Careem is most popular locally</li>
                            <li><strong>Payment:</strong> Card/digital payments</li>
                            <li><strong>Features:</strong> Route tracking, driver ratings</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4>Car Rental</h4>
                <div class="rental-info">
                    <div class="rental-card requirements">
                        <h5>Requirements</h5>
                        <ul>
                            <li><strong>License:</strong> International driving permit + home license</li>
                            <li><strong>Age:</strong> Minimum 21 years (25 for luxury cars)</li>
                            <li><strong>Deposit:</strong> AED 1,000-5,000 (blocked on credit card)</li>
                            <li><strong>Insurance:</strong> Comprehensive recommended</li>
                        </ul>
                    </div>
                    <div class="rental-card costs">
                        <h5>Daily Costs</h5>
                        <ul>
                            <li><strong>Economy:</strong> AED 80-150/day</li>
                            <li><strong>Mid-size:</strong> AED 150-250/day</li>
                            <li><strong>Luxury:</strong> AED 300-1000+/day</li>
                            <li><strong>Petrol:</strong> ~AED 3/liter (cheap!)</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4>Airport Transport - All Emirates</h4>
                <div class="airport-transport">
                    <div class="airport-option metro">
                        <h5>Dubai Airport (DXB) - Metro Red Line</h5>
                        <p><strong>Cost:</strong> AED 8 | <strong>Time:</strong> 45-60 mins to city center</p>
                    </div>
                    <div class="airport-option taxi">
                        <h5>Abu Dhabi Airport (AUH) - Bus/Taxi</h5>
                        <p><strong>Bus:</strong> AED 4 | <strong>Taxi:</strong> AED 60-80 | <strong>Time:</strong> 45-60 mins to city</p>
                    </div>
                    <div class="airport-option bus">
                        <h5>Airport Bus</h5>
                        <p><strong>Cost:</strong> AED 4 | <strong>Time:</strong> 60-90 mins (multiple stops)</p>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4>Inter-Emirate Travel</h4>
                <div class="transport-grid">
                    <div class="transport-card intercity">
                        <div class="transport-icon"></div>
                        <h5>Dubai ↔ Abu Dhabi</h5>
                        <div class="transport-badge popular">Most Popular Route</div>
                        <ul>
                            <li><strong>Bus:</strong> AED 25 | E100 Express, every 20 mins, 2 hours</li>
                            <li><strong>Taxi/Uber:</strong> AED 250-350 | 1.5 hours direct</li>
                            <li><strong>Car Rental:</strong> AED 120/day + AED 25 fuel + tolls</li>
                            <li><strong>Best Option:</strong> Bus for budget, taxi for comfort</li>
                        </ul>
                    </div>
                    <div class="transport-card intercity">
                        <div class="transport-icon"></div>
                        <h5>Dubai ↔ Sharjah</h5>
                        <div class="transport-badge budget">Budget Friendly</div>
                        <ul>
                            <li><strong>Bus:</strong> AED 7.50 | Every 10 mins, 45 mins</li>
                            <li><strong>Taxi:</strong> AED 60-80 | 30 mins</li>
                            <li><strong>Metro + Bus:</strong> Green Line to Rashidiya + bus</li>
                            <li><strong>Cultural Capital:</strong> Museums, traditional souks</li>
                        </ul>
                    </div>
                    <div class="transport-card intercity">
                        <div class="transport-icon"></div>
                        <h5>To Northern Emirates</h5>
                        <div class="transport-badge adventure">Adventure Route</div>
                        <ul>
                            <li><strong>Ras Al Khaimah:</strong> Bus AED 25-35 | Taxi AED 200-300</li>
                            <li><strong>Fujairah (East Coast):</strong> Bus AED 20-30 | 2.5 hours</li>
                            <li><strong>Ajman & Umm Al Quwain:</strong> Via Sharjah connections</li>
                            <li><strong>Best for:</strong> Mountain adventures, beaches, culture</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="modal-section highlight">
                <h4>Transport Tips</h4>
                <div class="transport-tips">
                    <div class="tip">
                        <span class="tip-emoji"></span>
                        <p><strong>Nol Card:</strong> Get this payment card for all public transport. Buy at metro stations.</p>
                    </div>
                    <div class="tip">
                        <span class="tip-emoji"></span>
                        <p><strong>Apps to Download:</strong> Dubai Metro app, Abu Dhabi Bus app, Careem, Uber, Google Maps works perfectly across UAE.</p>
                    </div>
                    <div class="tip">
                        <span class="tip-emoji"></span>
                        <p><strong>Multi-Emirate Passes:</strong> Consider UAE bus passes for extended travel. Dubai Metro day pass AED 20, Abu Dhabi Big Bus AED 189.</p>
                    </div>
                    <div class="tip">
                        <span class="tip-emoji"></span>
                        <p><strong>Capital vs Commercial Hub:</strong> Abu Dhabi has excellent bus network, Dubai has metro. Both cities complement each other perfectly.</p>
                    </div>
                    <div class="tip">
                        <span class="tip-emoji"></span>
                        <p><strong>Rush Hours:</strong> Avoid 7-9AM and 5-7PM if possible. Traffic can be heavy.</p>
                    </div>
                </div>
            </div>
        `
    },    trackingParam: 'ref'
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
