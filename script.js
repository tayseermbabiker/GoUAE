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
    },
    'burj-khalifa': {
        title: 'Burj Khalifa Experience',
        content: `
            <div class="experience-highlights">
                <div class="highlight-card">
                    <h5>World's Tallest Building</h5>
                    <p>Visit the iconic 828-meter skyscraper with breathtaking 360° views from levels 124, 125, and exclusive level 148</p>
                </div>
                <div class="highlight-card">
                    <h5>Skip-the-Line Access</h5>
                    <p>Bypass the crowds with priority entry tickets and high-speed elevators that reach level 124 in just 35 seconds</p>
                </div>
                <div class="highlight-card">
                    <h5>Dubai Mall Experience</h5>
                    <p>Explore the world's largest shopping mall with 1,200 stores, Dubai Aquarium, and countless dining options</p>
                </div>
            </div>

            <div class="modal-section">
                <h4>What's Included</h4>
                <div class="included-grid">
                    <div class="included-card standard">
                        <h5>Standard Experience</h5>
                        <ul>
                            <li>Burj Khalifa Level 124 & 125 access</li>
                            <li>Dubai Mall exploration time</li>
                            <li>High-speed elevator ride</li>
                            <li>Observation deck access</li>
                            <li>Free Dubai Mall parking</li>
                        </ul>
                    </div>
                    <div class="included-card premium">
                        <h5>Premium Experience</h5>
                        <ul>
                            <li>Everything from Standard</li>
                            <li>Burj Khalifa Level 148 access</li>
                            <li>Exclusive Sky Lounge access</li>
                            <li>Complimentary refreshments</li>
                            <li>Priority boarding</li>
                            <li>Souvenir photo package</li>
                        </ul>
                    </div>
                    <div class="included-card vip">
                        <h5>VIP Experience</h5>
                        <ul>
                            <li>Everything from Premium</li>
                            <li>Private tour guide</li>
                            <li>Sunset or sunrise timing</li>
                            <li>Champagne & canapes</li>
                            <li>Professional photography</li>
                            <li>Behind-scenes access</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4>Meeting Point & Timing</h4>
                <div class="logistics-info">
                    <div class="logistics-card">
                        <h5>Location</h5>
                        <p><strong>Dubai Mall, Lower Ground Level</strong><br>
                        Near the Dubai Aquarium entrance<br>
                        Free parking available (4+ hours)</p>
                    </div>
                    <div class="logistics-card">
                        <h5>Best Times</h5>
                        <p><strong>Sunrise:</strong> 6:30 AM - 8:30 AM<br>
                        <strong>Sunset:</strong> 4:30 PM - 6:30 PM<br>
                        <strong>Night:</strong> 7:00 PM - 10:00 PM</p>
                    </div>
                    <div class="logistics-card">
                        <h5>How to Get There</h5>
                        <p><strong>Dubai Metro:</strong> Burj Khalifa/Dubai Mall Station (2-min walk)<br>
                        <strong>Taxi:</strong> Ask for "Dubai Mall main entrance"<br>
                        <strong>Car:</strong> Follow Dubai Mall parking signs</p>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4>Important Information</h4>
                <div class="info-list">
                    <p><strong>Ticket Validity:</strong> Tickets are date and time specific. Allow 30-45 minutes total visit time for levels 124-125.</p>
                    <p><strong>Restrictions:</strong> No outside food/drinks. Security screening required. Large bags not permitted.</p>
                    <p><strong>Accessibility:</strong> Fully wheelchair accessible. Special assistance available with advance notice.</p>
                    <p><strong>Weather Policy:</strong> Open in all weather. Outdoor terraces may close during high winds or rain.</p>
                </div>
            </div>



            <div class="modal-guide-hint">
                <p><strong>Pro tip:</strong> Book through our Partner links to enjoy discounts of up to 25% — at no extra cost to you, it also helps us keep this guide running</p>
            </div>
        `
    },
    'img-worlds': {
        title: 'IMG Worlds of Adventure',
        content: `
            <div class="modal-section">
                <h4>World's Largest Indoor Theme Park</h4>
                <p>Experience thrilling rides and attractions featuring Marvel superheroes, Cartoon Network characters, and more.</p>

                <div class="experience-details">
                    <div class="detail-card">
                        <h5>📍 Location</h5>
                        <p>City of Arabia, Dubai</p>
                    </div>
                    <div class="detail-card">
                        <h5>⏰ Duration</h5>
                        <p>Full day (6-8 hours recommended)</p>
                    </div>
                    <div class="detail-card">
                        <h5>💰 Price Range</h5>
                        <p>AED 300-400 per person</p>
                    </div>
                </div>

                <div class="booking-options">
                    <h5>Featured Zones:</h5>
                    <ul>
                        <li><strong>Marvel Zone:</strong> Spider-Man, Avengers rides</li>
                        <li><strong>Cartoon Network Zone:</strong> Ben 10, Powerpuff Girls</li>
                        <li><strong>Lost Valley:</strong> Dinosaur adventures</li>
                        <li><strong>IMG Boulevard:</strong> Shops and dining</li>
                    </ul>
                </div>

                <p class="booking-note">Perfect for families and thrill-seekers. Air-conditioned comfort year-round!</p>
            </div>
        `
    },
    'desert-safari': {
        title: 'Desert Safari Experience',
        content: `
            <div class="modal-section">
                <h4>Traditional Bedouin Adventure</h4>
                <p>Experience the magic of the Arabian desert with dune bashing, camel riding, and traditional entertainment.</p>

                <div class="experience-details">
                    <div class="detail-card">
                        <h5>📍 Location</h5>
                        <p>Dubai Desert Conservation Reserve</p>
                    </div>
                    <div class="detail-card">
                        <h5>⏰ Duration</h5>
                        <p>6 hours (2:30 PM - 8:30 PM typical)</p>
                    </div>
                    <div class="detail-card">
                        <h5>💰 Price Range</h5>
                        <p>AED 200-600 (varies by package)</p>
                    </div>
                </div>

                <div class="booking-options">
                    <h5>What's Included:</h5>
                    <ul>
                        <li><strong>Dune Bashing:</strong> 4WD adventure across sand dunes</li>
                        <li><strong>Camel Riding:</strong> Traditional desert transport</li>
                        <li><strong>BBQ Dinner:</strong> Traditional Arabic buffet</li>
                        <li><strong>Entertainment:</strong> Belly dancing, Tanoura shows</li>
                        <li><strong>Activities:</strong> Sandboarding, henna painting</li>
                    </ul>
                </div>

                <p class="booking-note">Best experienced during cooler months (Nov-Mar). Sunset views included!</p>
            </div>
        `
    },
    'sheikh-zayed-mosque': {
        title: 'Sheikh Zayed Grand Mosque',
        content: `
            <div class="modal-section">
                <h4>Architectural Marvel & Cultural Site</h4>
                <p>Visit one of the world's most beautiful mosques, showcasing stunning Islamic architecture and cultural heritage.</p>

                <div class="experience-details">
                    <div class="detail-card">
                        <h5>📍 Location</h5>
                        <p>Abu Dhabi</p>
                    </div>
                    <div class="detail-card">
                        <h5>⏰ Duration</h5>
                        <p>2-3 hours (including travel from Dubai)</p>
                    </div>
                    <div class="detail-card">
                        <h5>💰 Price</h5>
                        <p>FREE entry (guided tours available)</p>
                    </div>
                </div>

                <div class="booking-options">
                    <h5>What to Expect:</h5>
                    <ul>
                        <li><strong>Architecture:</strong> 82 white marble domes, gold-plated chandeliers</li>
                        <li><strong>Capacity:</strong> Over 40,000 worshippers</li>
                        <li><strong>Features:</strong> World's largest hand-knotted carpet</li>
                        <li><strong>Photography:</strong> Allowed in designated areas</li>
                    </ul>
                </div>

                <div class="dress-requirements">
                    <h5>Dress Code (Strictly Enforced):</h5>
                    <ul>
                        <li><strong>Women:</strong> Long sleeves, long pants/skirt, headscarf (provided)</li>
                        <li><strong>Men:</strong> Long pants, covered shoulders</li>
                        <li><strong>Colors:</strong> Modest colors, avoid tight or transparent clothing</li>
                    </ul>
                </div>

                <p class="booking-note">Free entry. Tours available through our partner for transportation and guided experience.</p>
            </div>
        `
    },
    'louvre-abu-dhabi': {
        title: 'Louvre Abu Dhabi',
        content: `
            <div class="modal-section">
                <h4>World-Class Art & Culture</h4>
                <p>Discover masterpieces from around the world in this stunning museum featuring works from ancient to contemporary times.</p>

                <div class="experience-details">
                    <div class="detail-card">
                        <h5>📍 Location</h5>
                        <p>Saadiyat Island, Abu Dhabi</p>
                    </div>
                    <div class="detail-card">
                        <h5>⏰ Duration</h5>
                        <p>3-4 hours</p>
                    </div>
                    <div class="detail-card">
                        <h5>💰 Price Range</h5>
                        <p>AED 63-200 (varies by exhibitions)</p>
                    </div>
                </div>

                <div class="booking-options">
                    <h5>Highlights:</h5>
                    <ul>
                        <li><strong>Iconic Dome:</strong> Stunning geometric architecture</li>
                        <li><strong>Collection:</strong> Works by Leonardo da Vinci, Van Gogh</li>
                        <li><strong>Special Exhibitions:</strong> Rotating international displays</li>
                        <li><strong>Children's Museum:</strong> Interactive family experiences</li>
                    </ul>
                </div>

                <p class="booking-note">Book online for discounts. Audio guides available in multiple languages.</p>
            </div>
        `
    },
    'yas-island': {
        title: 'Yas Island Theme Parks & Adventures',
        content: `
            <div class="experience-highlights">
                <div class="highlight-card">
                    <h5>Yas Waterworld</h5>
                    <p>43 rides, slides & attractions including world's first hydro-magnetic tornado and longest suspended roller coaster over water</p>
                </div>
                <div class="highlight-card">
                    <h5>Warner Bros World</h5>
                    <p>Batman, Superman & Wonder Woman rides, Looney Tunes attractions, and world's largest indoor theme park</p>
                </div>
                <div class="highlight-card">
                    <h5>Ferrari World</h5>
                    <p>Formula Rossa - world's fastest coaster, F1 simulators, Ferrari gallery and family racing experiences</p>
                </div>
            </div>

            <div class="modal-section">
                <h4>Park Packages</h4>
                <div class="included-grid">
                    <div class="included-card standard">
                        <h5>Single Park Access</h5>
                        <ul>
                            <li>Choice of ONE park (full day)</li>
                            <li>All rides & attractions included</li>
                            <li>Free parking at Yas Island</li>
                            <li>Free shuttle between parks</li>
                            <li>Basic locker access</li>
                        </ul>
                    </div>
                    <div class="included-card premium">
                        <h5>Multi-Park Pass</h5>
                        <ul>
                            <li>Everything from Single Park</li>
                            <li>Access to 2 parks in one day</li>
                            <li>Fast track entry to all rides</li>
                            <li>Premium locker & towel service</li>
                            <li>Meal vouchers at each park</li>
                            <li>Character meet & greet priority</li>
                        </ul>
                    </div>
                    <div class="included-card vip">
                        <h5>Ultimate Yas Experience</h5>
                        <ul>
                            <li>Everything from Multi-Park</li>
                            <li>All 3 major parks access</li>
                            <li>VIP express lanes</li>
                            <li>Private cabanas & premium dining</li>
                            <li>Personal park guide</li>
                            <li>Professional photography package</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4>Park Information</h4>
                <div class="logistics-info">
                    <div class="logistics-card">
                        <h5>Location</h5>
                        <p><strong>Yas Island, Abu Dhabi</strong><br>
                        30 minutes from Abu Dhabi city<br>
                        Free parking and shuttle service</p>
                    </div>
                    <div class="logistics-card">
                        <h5>Best Times</h5>
                        <p><strong>Weekdays:</strong> Less crowded<br>
                        <strong>Opening:</strong> 10:00 AM<br>
                        <strong>Cool Season:</strong> Nov-Mar ideal</p>
                    </div>
                    <div class="logistics-card">
                        <h5>Getting There</h5>
                        <p><strong>From Dubai:</strong> 1 hour drive<br>
                        <strong>From Abu Dhabi:</strong> 30 minutes<br>
                        <strong>Public Transport:</strong> Bus 170 from city</p>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4>Important Information</h4>
                <div class="info-list">
                    <p><strong>Height Restrictions:</strong> Some rides have minimum height requirements. Ferrari World and Warner Bros are suitable for all ages.</p>
                    <p><strong>Weather Policy:</strong> Ferrari World and Warner Bros are fully indoor. Yas Waterworld has both indoor and outdoor areas.</p>
                    <p><strong>Best for Families:</strong> All three parks cater to different age groups with dedicated kids' areas and family-friendly attractions.</p>
                    <p><strong>Food & Dining:</strong> Multiple restaurants and cafes in each park. Outside food not permitted.</p>
                </div>
            </div>

            <div class="modal-guide-hint">
                <p><strong>Pro tip:</strong> Book through our Partner links to enjoy discounts of up to 25% — at no extra cost to you, it also helps us keep this guide running</p>
            </div>
        `
    },
    'theme-parks': {
        title: 'Theme Parks & Family Adventure',
        content: `
            <div class="experience-highlights">
                <div class="highlight-card">
                    <h5>World-Class Theme Parks</h5>
                    <p>Experience IMG Worlds, Motiongate Dubai, and Legoland - featuring Hollywood movies, superheroes, and family adventures</p>
                </div>
                <div class="highlight-card">
                    <h5>Movie & Superhero Themes</h5>
                    <p>Meet your favorite characters from Marvel, Cartoon Network, and DreamWorks in immersive themed experiences</p>
                </div>
                <div class="highlight-card">
                    <h5>Perfect for All Ages</h5>
                    <p>From toddler-friendly rides to adrenaline-pumping roller coasters - entertainment for the entire family</p>
                </div>
            </div>

            <div class="modal-section">
                <h4>Park Packages</h4>
                <div class="included-grid">
                    <div class="included-card standard">
                        <h5>Single Park</h5>
                        <ul>
                            <li>Choice of IMG Worlds OR Motiongate</li>
                            <li>All rides & attractions access</li>
                            <li>Fast-track entry included</li>
                            <li>Free parking at venue</li>
                            <li>Basic photo opportunities</li>
                            <li>Transportation from Dubai Mall</li>
                        </ul>
                    </div>
                    <div class="included-card premium">
                        <h5>Multi-Park Pass</h5>
                        <ul>
                            <li>Everything from Single Park</li>
                            <li>2 parks in one day OR 2 days</li>
                            <li>Meal voucher at each park</li>
                            <li>Character meet & greet priority</li>
                            <li>Souvenir photo package</li>
                            <li>VIP entrance lanes</li>
                        </ul>
                    </div>
                    <div class="included-card vip">
                        <h5>Ultimate Family</h5>
                        <ul>
                            <li>Everything from Multi-Park</li>
                            <li>All 3 major parks access</li>
                            <li>Private character experiences</li>
                            <li>Premium dining reservations</li>
                            <li>Professional family photoshoot</li>
                            <li>Exclusive VIP lounge access</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4>Park Information</h4>
                <div class="logistics-info">
                    <div class="logistics-card">
                        <h5>Location</h5>
                        <p><strong>Dubai Parks & Resorts</strong><br>
                        Jebel Ali area, Dubai<br>
                        Free shuttle from key hotels</p>
                    </div>
                    <div class="logistics-card">
                        <h5>Best Times</h5>
                        <p><strong>Weekdays:</strong> Less crowded<br>
                        <strong>Opening:</strong> 10:00 AM<br>
                        <strong>Peak Season:</strong> Oct-Mar</p>
                    </div>
                    <div class="logistics-card">
                        <h5>Getting There</h5>
                        <p><strong>Metro + Bus:</strong> Red Line to Ibn Battuta<br>
                        <strong>Taxi:</strong> Direct from Dubai (45 mins)<br>
                        <strong>Shuttle:</strong> From major hotels</p>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4>Important Information</h4>
                <div class="info-list">
                    <p><strong>Height Restrictions:</strong> Some rides have minimum height requirements. Check park guidelines for children.</p>
                    <p><strong>Food Policy:</strong> Outside food not allowed. Variety of dining options available in each park.</p>
                    <p><strong>Weather:</strong> Indoor air-conditioned attractions perfect for hot weather. Some outdoor rides may close during storms.</p>
                    <p><strong>Best for Families:</strong> Recommended for families with children 3-15 years. Adult-only attractions also available.</p>
                </div>
            </div>

            <div class="modal-guide-hint">
                <p><strong>Pro tip:</strong> Book through our Partner links to enjoy discounts of up to 25% — at no extra cost to you, it also helps us keep this guide running</p>
            </div>
        `
    },
    'aquarium': {
        title: 'Dubai Aquarium & VR Park',
        content: `
            <div class="experience-highlights">
                <div class="highlight-card">
                    <h5>48-Meter Tunnel</h5>
                    <p>Walk through a massive underwater tunnel surrounded by sharks, rays, and thousands of marine species</p>
                </div>
                <div class="highlight-card">
                    <h5>VR Park Experience</h5>
                    <p>Cutting-edge virtual reality experiences and interactive games in the world's largest VR park</p>
                </div>
                <div class="highlight-card">
                    <h5>King Croc Encounter</h5>
                    <p>Meet King Croc, one of the largest crocodiles in captivity, in the Underwater Zoo</p>
                </div>
            </div>

            <div class="modal-section">
                <h4>Experience Options</h4>
                <div class="included-grid">
                    <div class="included-card standard">
                        <h5>Aquarium Tunnel</h5>
                        <ul>
                            <li>48-meter underwater tunnel</li>
                            <li>Viewing panel access</li>
                            <li>Shark and ray encounters</li>
                            <li>Basic photography allowed</li>
                        </ul>
                    </div>
                    <div class="included-card premium">
                        <h5>Aquarium + VR Park</h5>
                        <ul>
                            <li>Everything from Tunnel</li>
                            <li>Full VR Park access</li>
                            <li>All VR games included</li>
                            <li>Behind-the-scenes tour</li>
                            <li>Professional photos</li>
                        </ul>
                    </div>
                    <div class="included-card vip">
                        <h5>Ultimate Experience</h5>
                        <ul>
                            <li>Everything from Premium</li>
                            <li>Underwater Zoo access</li>
                            <li>Glass bottom boat ride</li>
                            <li>Private marine biologist tour</li>
                            <li>Cage snorkeling with sharks</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4>Location & Timing</h4>
                <div class="logistics-info">
                    <div class="logistics-card">
                        <h5>Location</h5>
                        <p><strong>Dubai Mall, Ground Level</strong><br>
                        Next to Dubai Fountain<br>
                        Free parking at Dubai Mall</p>
                    </div>
                    <div class="logistics-card">
                        <h5>Best Times</h5>
                        <p><strong>Early Morning:</strong> 10:00 AM - Less crowded<br>
                        <strong>Feeding Times:</strong> 2:00 PM & 7:00 PM<br>
                        <strong>VR Peak:</strong> Evenings after 6:00 PM</p>
                    </div>
                    <div class="logistics-card">
                        <h5>Getting There</h5>
                        <p><strong>Metro:</strong> Burj Khalifa/Dubai Mall Station<br>
                        <strong>Taxi:</strong> Ask for Dubai Mall main entrance<br>
                        <strong>Walking:</strong> From Burj Khalifa (5 mins)</p>
                    </div>
                </div>
            </div>

            <div class="modal-guide-hint">
                <p><strong>Pro tip:</strong> Book through our Partner links to enjoy discounts of up to 25% — at no extra cost to you, it also helps us keep this guide running</p>
            </div>
        `
    },
    'yacht': {
        title: 'Luxury Yacht & Marina Experience',
        content: `
            <div class="experience-highlights">
                <div class="highlight-card">
                    <h5>Premium Yacht Charter</h5>
                    <p>Sail in luxury yachts with professional crew through Dubai Marina and Palm Jumeirah waters</p>
                </div>
                <div class="highlight-card">
                    <h5>Iconic Views</h5>
                    <p>See Burj Al Arab, Palm Jumeirah, and Dubai Marina skyline from the water with unique photo opportunities</p>
                </div>
                <div class="highlight-card">
                    <h5>All-Inclusive Service</h5>
                    <p>Professional crew, refreshments, water sports equipment, and luxury amenities included</p>
                </div>
            </div>

            <div class="modal-section">
                <h4>Charter Options</h4>
                <div class="included-grid">
                    <div class="included-card standard">
                        <h5>Marina Cruise</h5>
                        <ul>
                            <li>2-hour Dubai Marina cruise</li>
                            <li>Welcome drinks and snacks</li>
                            <li>Professional crew service</li>
                            <li>Swimming and snorkeling gear</li>
                            <li>Bluetooth music system</li>
                        </ul>
                    </div>
                    <div class="included-card premium">
                        <h5>Sunset Experience</h5>
                        <ul>
                            <li>Everything from Marina Cruise</li>
                            <li>4-hour premium charter</li>
                            <li>Gourmet catering service</li>
                            <li>Jet ski and water sports</li>
                            <li>Sunset photography session</li>
                            <li>Premium bar service</li>
                        </ul>
                    </div>
                    <div class="included-card vip">
                        <h5>Luxury Day Charter</h5>
                        <ul>
                            <li>Everything from Sunset</li>
                            <li>Full day 8-hour charter</li>
                            <li>Private chef and butler service</li>
                            <li>Multiple water sports included</li>
                            <li>Professional photography crew</li>
                            <li>Helicopter transfer option</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4>Marina Information</h4>
                <div class="logistics-info">
                    <div class="logistics-card">
                        <h5>Departure</h5>
                        <p><strong>Dubai Marina</strong><br>
                        Marina Walk promenade<br>
                        Valet parking available</p>
                    </div>
                    <div class="logistics-card">
                        <h5>Best Times</h5>
                        <p><strong>Morning:</strong> 9:00 AM - 1:00 PM<br>
                        <strong>Sunset:</strong> 4:00 PM - 8:00 PM<br>
                        <strong>Season:</strong> Oct-Apr ideal weather</p>
                    </div>
                    <div class="logistics-card">
                        <h5>What to Bring</h5>
                        <p><strong>Essentials:</strong> Sunscreen, swimwear<br>
                        <strong>Photography:</strong> Waterproof camera<br>
                        <strong>Clothing:</strong> Light layers for evening</p>
                    </div>
                </div>
            </div>

            <div class="modal-guide-hint">
                <p><strong>Pro tip:</strong> Book through our Partner links to enjoy discounts of up to 25% — at no extra cost to you, it also helps us keep this guide running</p>
            </div>
        `
    },
    'skydiving': {
        title: 'Skydiving',
        content: `
            <div class="experience-highlights">
                <div class="highlight-card">
                    <h5>Tandem Skydiving</h5>
                    <p>Freefall from 13,000 feet with certified instructors, experiencing unmatched views of Dubai's coastline and landmarks</p>
                </div>
                <div class="highlight-card">
                    <h5>Water Sports Package</h5>
                    <p>Jet skiing, parasailing, wakeboarding, and flyboarding - all the adrenaline-pumping water activities you crave</p>
                </div>
                <div class="highlight-card">
                    <h5>Professional Safety</h5>
                    <p>Internationally certified instructors, top-quality equipment, and comprehensive safety briefings for all activities</p>
                </div>
            </div>

            <div class="modal-section">
                <h4>Adventure Packages</h4>
                <div class="included-grid">
                    <div class="included-card standard">
                        <h5>Single Activity</h5>
                        <ul>
                            <li>Choice of skydiving OR water sports</li>
                            <li>Professional safety equipment</li>
                            <li>Basic photo package included</li>
                            <li>Safety briefing and training</li>
                            <li>Transportation to/from hotel</li>
                        </ul>
                    </div>
                    <div class="included-card premium">
                        <h5>Combo Adventure</h5>
                        <ul>
                            <li>Everything from Single Activity</li>
                            <li>Skydiving + water sports combo</li>
                            <li>HD video footage included</li>
                            <li>Priority scheduling</li>
                            <li>Lunch at beachfront restaurant</li>
                            <li>Professional photography</li>
                        </ul>
                    </div>
                    <div class="included-card vip">
                        <h5>Ultimate Adrenaline</h5>
                        <ul>
                            <li>Everything from Combo</li>
                            <li>Private instructor sessions</li>
                            <li>Helicopter scenic flight</li>
                            <li>Premium equipment upgrade</li>
                            <li>VIP lounge access</li>
                            <li>Professional video crew</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4>Activity Information</h4>
                <div class="logistics-info">
                    <div class="logistics-card">
                        <h5>Location</h5>
                        <p><strong>Skydive Dubai Desert Campus</strong><br>
                        Al Lisaili area, Dubai<br>
                        Free shuttle from city hotels</p>
                    </div>
                    <div class="logistics-card">
                        <h5>Requirements</h5>
                        <p><strong>Age:</strong> 18+ years (parental consent 16-17)<br>
                        <strong>Weight:</strong> 90kg maximum<br>
                        <strong>Health:</strong> Medical clearance required</p>
                    </div>
                    <div class="logistics-card">
                        <h5>Weather</h5>
                        <p><strong>Best Conditions:</strong> Clear skies, low wind<br>
                        <strong>Season:</strong> Oct-May ideal<br>
                        <strong>Backup:</strong> Indoor simulator available</p>
                    </div>
                </div>
            </div>

            <div class="modal-guide-hint">
                <p><strong>Pro tip:</strong> Book through our Partner links to enjoy discounts of up to 25% — at no extra cost to you, it also helps us keep this guide running</p>
            </div>
        `
    },
    'souk': {
        title: 'Traditional Souks & Markets - Free Self-Guided',
        content: `
            <div class="experience-highlights">
                <div class="highlight-card">
                    <h5>Gold Souk Heritage</h5>
                    <p>Explore the world's largest gold jewelry market with over 380 retailers in Dubai's historic Deira district - completely free!</p>
                </div>
                <div class="highlight-card">
                    <h5>Spice Souk Aromas</h5>
                    <p>Discover exotic spices, herbs, perfumes, and traditional remedies in the atmospheric covered market</p>
                </div>
                <div class="highlight-card">
                    <h5>Traditional Abra Ride</h5>
                    <p>Cross Dubai Creek on traditional wooden boats for just 1 AED - an authentic experience connecting both souks</p>
                </div>
            </div>

            <div class="modal-section">
                <h4>Essential Bargaining Guide</h4>
                <div class="bargaining-tips">
                    <div class="tip-card">
                        <h5>Starting Prices</h5>
                        <ul>
                            <li><strong>Gold:</strong> Start at 40-50% of asking price</li>
                            <li><strong>Spices:</strong> Start at 30-40% of asking price</li>
                            <li><strong>Souvenirs:</strong> Start at 25-35% of asking price</li>
                            <li><strong>Perfumes:</strong> Start at 50% of asking price</li>
                        </ul>
                    </div>
                    <div class="tip-card">
                        <h5>Bargaining Phrases</h5>
                        <ul>
                            <li><strong>"What's your best price?"</strong> - Opens negotiation</li>
                            <li><strong>"I'll take 3 for..."</strong> - Bundle discount</li>
                            <li><strong>"Cash price?"</strong> - Often gets better deals</li>
                            <li><strong>"I'll think about it"</strong> - Walk away technique</li>
                        </ul>
                    </div>
                    <div class="tip-card">
                        <h5>Pro Bargaining Tips</h5>
                        <ul>
                            <li>Visit multiple shops to compare prices first</li>
                            <li>Don't show too much interest initially</li>
                            <li>Bundle items for better discounts</li>
                            <li>Be prepared to walk away - they'll often call you back</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4>Self-Touring Guide</h4>
                <div class="logistics-info">
                    <div class="logistics-card">
                        <h5>Getting There</h5>
                        <p><strong>Metro:</strong> Al Ras Station (Green Line)<br>
                        <strong>Bus:</strong> Routes 8, 15, C2<br>
                        <strong>Taxi:</strong> Ask for "Gold Souk, Deira"<br>
                        <strong>Parking:</strong> Limited street parking available</p>
                    </div>
                    <div class="logistics-card">
                        <h5>Best Visiting Times</h5>
                        <p><strong>Morning:</strong> 10:00 AM - 1:00 PM (cooler, less crowded)<br>
                        <strong>Evening:</strong> 4:00 PM - 10:00 PM (atmospheric lighting)<br>
                        <strong>Avoid:</strong> Friday 12-2 PM (prayer time), midday heat<br>
                        <strong>Peak season:</strong> October to March</p>
                    </div>
                    <div class="logistics-card">
                        <h5>What to Bring</h5>
                        <p><strong>Cash:</strong> AED preferred for better prices<br>
                        <strong>Comfortable shoes:</strong> Lots of walking<br>
                        <strong>Bag:</strong> For your purchases<br>
                        <strong>Phone:</strong> Camera for memories, calculator for prices</p>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4>Quality & Safety Tips</h4>
                <div class="safety-grid">
                    <div class="safety-card">
                        <h5>Gold Authenticity</h5>
                        <ul>
                            <li>Look for hallmark stamps (18K, 21K, 22K)</li>
                            <li>Ask for certificates for expensive pieces</li>
                            <li>Reputable shops display trade licenses</li>
                            <li>Weight and purity should be clearly marked</li>
                        </ul>
                    </div>
                    <div class="safety-card">
                        <h5>General Shopping Safety</h5>
                        <ul>
                            <li>Keep valuables secure while browsing</li>
                            <li>Agree on final price before payment</li>
                            <li>Count your change carefully</li>
                            <li>Keep receipts for valuable purchases</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="modal-guide-hint">
                <p><strong>Free Experience:</strong> Both Gold Souk and Spice Souk are completely free to explore. Take your time, enjoy the atmosphere, and bargain with confidence!</p>
            </div>
        `
    },
    'dubai': {
        title: 'Dubai - Modern Metropolis',
        content: `
            <div class="experience-highlights">
                <div class="highlight-card">
                    <h5>Iconic Skyline</h5>
                    <p>Home to Burj Khalifa, Burj Al Arab, and world's most impressive modern architecture</p>
                </div>
                <div class="highlight-card">
                    <h5>Shopping Paradise</h5>
                    <p>Dubai Mall, Mall of the Emirates, Gold Souk, and endless luxury shopping experiences</p>
                </div>
                <div class="highlight-card">
                    <h5>World-Class Entertainment</h5>
                    <p>Theme parks, beach clubs, fine dining, and vibrant nightlife scene</p>
                </div>
            </div>

            <div class="modal-section">
                <h4>Must-Visit Attractions</h4>
                <div class="included-grid">
                    <div class="included-card standard">
                        <h5>Modern Dubai</h5>
                        <ul>
                            <li>Burj Khalifa observation decks</li>
                            <li>Dubai Mall & Dubai Fountain</li>
                            <li>Palm Jumeirah & Atlantis</li>
                            <li>Dubai Marina & JBR Walk</li>
                            <li>DIFC & Business Bay</li>
                        </ul>
                    </div>
                    <div class="included-card premium">
                        <h5>Traditional Dubai</h5>
                        <ul>
                            <li>Dubai Creek & Abra rides</li>
                            <li>Gold Souk & Spice Souk</li>
                            <li>Al Fahidi Historical District</li>
                            <li>Dubai Museum</li>
                            <li>Traditional markets & heritage</li>
                        </ul>
                    </div>
                    <div class="included-card vip">
                        <h5>Entertainment & Leisure</h5>
                        <ul>
                            <li>IMG Worlds & Global Village</li>
                            <li>Dubai Aquarium & Underwater Zoo</li>
                            <li>Ski Dubai & indoor attractions</li>
                            <li>Beach clubs & water parks</li>
                            <li>Desert safari experiences</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4>Getting Around Dubai</h4>
                <div class="logistics-info">
                    <div class="logistics-card">
                        <h5>Dubai Metro</h5>
                        <p><strong>Red & Green Lines</strong><br>
                        Covers major attractions<br>
                        AED 3-7 per journey</p>
                    </div>
                    <div class="logistics-card">
                        <h5>Taxis & Ride-hailing</h5>
                        <p><strong>Uber, Careem, Dubai Taxi</strong><br>
                        Widely available<br>
                        Starting from AED 12</p>
                    </div>
                    <div class="logistics-card">
                        <h5>Best Areas to Stay</h5>
                        <p><strong>Downtown:</strong> Burj Khalifa area<br>
                        <strong>Marina:</strong> Beach & nightlife<br>
                        <strong>Jumeirah:</strong> Beach resorts</p>
                    </div>
                </div>
            </div>

            <div class="modal-guide-hint">
                <p><strong>Pro tip:</strong> Book through our Partner links to enjoy discounts of up to 25% — at no extra cost to you, it also helps us keep this guide running</p>
            </div>
        `
    },
    'abu-dhabi': {
        title: 'Abu Dhabi - Capital & Cultural Heart',
        content: `
            <div class="experience-highlights">
                <div class="highlight-card">
                    <h5>Cultural Treasures</h5>
                    <p>Sheikh Zayed Grand Mosque, Louvre Abu Dhabi, and rich Emirati heritage sites</p>
                </div>
                <div class="highlight-card">
                    <h5>Luxury & Elegance</h5>
                    <p>Emirates Palace, world-class hotels, and sophisticated dining experiences</p>
                </div>
                <div class="highlight-card">
                    <h5>Entertainment Hub</h5>
                    <p>Yas Island theme parks, Formula 1 circuit, and family-friendly attractions</p>
                </div>
            </div>

            <div class="modal-section">
                <h4>Top Attractions</h4>
                <div class="included-grid">
                    <div class="included-card standard">
                        <h5>Cultural Sites</h5>
                        <ul>
                            <li>Sheikh Zayed Grand Mosque</li>
                            <li>Louvre Abu Dhabi museum</li>
                            <li>Qasr Al Watan palace</li>
                            <li>Heritage Village</li>
                            <li>Cultural Foundation</li>
                        </ul>
                    </div>
                    <div class="included-card premium">
                        <h5>Modern Attractions</h5>
                        <ul>
                            <li>Emirates Palace hotel</li>
                            <li>Corniche waterfront</li>
                            <li>Marina Mall & shopping</li>
                            <li>Saadiyat Island beaches</li>
                            <li>Masdar City tours</li>
                        </ul>
                    </div>
                    <div class="included-card vip">
                        <h5>Yas Island</h5>
                        <ul>
                            <li>Ferrari World Abu Dhabi</li>
                            <li>Yas Waterworld</li>
                            <li>Warner Bros World</li>
                            <li>Yas Marina Circuit</li>
                            <li>Yas Mall shopping</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4>Travel Information</h4>
                <div class="logistics-info">
                    <div class="logistics-card">
                        <h5>From Dubai</h5>
                        <p><strong>By Car:</strong> 1.5 hours<br>
                        <strong>By Bus:</strong> E100/E101 routes<br>
                        <strong>Distance:</strong> 150km</p>
                    </div>
                    <div class="logistics-card">
                        <h5>Local Transport</h5>
                        <p><strong>Taxis:</strong> Readily available<br>
                        <strong>Bus:</strong> Department of Transport<br>
                        <strong>Car Rental:</strong> Recommended</p>
                    </div>
                    <div class="logistics-card">
                        <h5>Best Time to Visit</h5>
                        <p><strong>Cool Season:</strong> Nov-Mar<br>
                        <strong>Events:</strong> Formula 1 (Nov)<br>
                        <strong>Ramadan:</strong> Special cultural experience</p>
                    </div>
                </div>
            </div>

            <div class="modal-guide-hint">
                <p><strong>Pro tip:</strong> Book through our Partner links to enjoy discounts of up to 25% — at no extra cost to you, it also helps us keep this guide running</p>
            </div>
        `
    },
    'sharjah': {
        title: 'Sharjah - Cultural Capital',
        content: `
            <div class="experience-highlights">
                <div class="highlight-card">
                    <h5>UNESCO Heritage</h5>
                    <p>Cultural capital of the Arab world with preserved traditional architecture and museums</p>
                </div>
                <div class="highlight-card">
                    <h5>Art & Museums</h5>
                    <p>Over 20 museums, art galleries, and cultural centers showcasing Emirati heritage</p>
                </div>
                <div class="highlight-card">
                    <h5>Traditional Markets</h5>
                    <p>Authentic souks, traditional crafts, and local shopping experiences</p>
                </div>
            </div>

            <div class="modal-section">
                <h4>Cultural Attractions</h4>
                <div class="included-grid">
                    <div class="included-card standard">
                        <h5>Heritage District</h5>
                        <ul>
                            <li>Heart of Sharjah restoration</li>
                            <li>Traditional wind-tower houses</li>
                            <li>Al Eslah School Museum</li>
                            <li>Calligraphy Museum</li>
                            <li>Heritage walking tours</li>
                        </ul>
                    </div>
                    <div class="included-card premium">
                        <h5>Museums & Arts</h5>
                        <ul>
                            <li>Sharjah Art Museum</li>
                            <li>Islamic Civilization Museum</li>
                            <li>Science Museum</li>
                            <li>Natural History Museum</li>
                            <li>Contemporary art galleries</li>
                        </ul>
                    </div>
                    <div class="included-card vip">
                        <h5>Markets & Shopping</h5>
                        <ul>
                            <li>Central Souk (Blue Souk)</li>
                            <li>Traditional craft markets</li>
                            <li>Fish & vegetable markets</li>
                            <li>Rolla Square Park</li>
                            <li>Local textile shopping</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4>Visiting Sharjah</h4>
                <div class="logistics-info">
                    <div class="logistics-card">
                        <h5>From Dubai</h5>
                        <p><strong>By Car:</strong> 30-45 minutes<br>
                        <strong>By Bus:</strong> Regular connections<br>
                        <strong>Distance:</strong> 25km</p>
                    </div>
                    <div class="logistics-card">
                        <h5>Cultural Guidelines</h5>
                        <p><strong>Dress Code:</strong> Conservative<br>
                        <strong>Photography:</strong> Ask permission<br>
                        <strong>Alcohol:</strong> Dry emirate</p>
                    </div>
                    <div class="logistics-card">
                        <h5>Best Experience</h5>
                        <p><strong>Morning:</strong> Museums & heritage<br>
                        <strong>Evening:</strong> Corniche & markets<br>
                        <strong>Duration:</strong> Half to full day</p>
                    </div>
                </div>
            </div>

            <div class="modal-guide-hint">
                <p><strong>Pro tip:</strong> Book through our Partner links to enjoy discounts of up to 25% — at no extra cost to you, it also helps us keep this guide running</p>
            </div>
        `
    },
    'ajman': {
        title: 'Ajman - Beach Resorts & Traditions',
        content: `
            <div class="experience-highlights">
                <div class="highlight-card">
                    <h5>Beautiful Beaches</h5>
                    <p>Pristine coastline with luxury beach resorts and water sports activities</p>
                </div>
                <div class="highlight-card">
                    <h5>Traditional Culture</h5>
                    <p>Authentic Emirati experiences, local markets, and cultural heritage sites</p>
                </div>
                <div class="highlight-card">
                    <h5>Relaxed Atmosphere</h5>
                    <p>Peaceful alternative to busy Dubai with family-friendly attractions</p>
                </div>
            </div>

            <div class="modal-section">
                <h4>Ajman Highlights</h4>
                <div class="included-grid">
                    <div class="included-card standard">
                        <h5>Beach & Water</h5>
                        <ul>
                            <li>Ajman Beach & corniche</li>
                            <li>Water sports & activities</li>
                            <li>Beach resort day passes</li>
                            <li>Fishing trips & boat tours</li>
                            <li>Sunset beach walks</li>
                        </ul>
                    </div>
                    <div class="included-card premium">
                        <h5>Culture & Heritage</h5>
                        <ul>
                            <li>Ajman Museum in old fort</li>
                            <li>Traditional dhow building</li>
                            <li>Local souks & markets</li>
                            <li>Pearl diving history</li>
                            <li>Emirati cultural experiences</li>
                        </ul>
                    </div>
                    <div class="included-card vip">
                        <h5>Family Activities</h5>
                        <ul>
                            <li>Beach parks & playgrounds</li>
                            <li>Mangrove nature walks</li>
                            <li>Local restaurant experiences</li>
                            <li>Shopping at City Centre</li>
                            <li>Photography spots</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4>Travel Information</h4>
                <div class="logistics-info">
                    <div class="logistics-card">
                        <h5>Getting There</h5>
                        <p><strong>From Dubai:</strong> 45 minutes<br>
                        <strong>From Sharjah:</strong> 20 minutes<br>
                        <strong>Best Route:</strong> E11 highway</p>
                    </div>
                    <div class="logistics-card">
                        <h5>Best for</h5>
                        <p><strong>Beach Lovers:</strong> Pristine coastline<br>
                        <strong>Families:</strong> Safe & relaxed<br>
                        <strong>Culture:</strong> Authentic experiences</p>
                    </div>
                    <div class="logistics-card">
                        <h5>Recommended Duration</h5>
                        <p><strong>Day Trip:</strong> 6-8 hours<br>
                        <strong>Beach Day:</strong> Full day<br>
                        <strong>Overnight:</strong> Beach resorts</p>
                    </div>
                </div>
            </div>

            <div class="modal-guide-hint">
                <p><strong>Pro tip:</strong> Book through our Partner links to enjoy discounts of up to 25% — at no extra cost to you, it also helps us keep this guide running</p>
            </div>
        `
    },
    'ras-al-khaimah': {
        title: 'Ras Al Khaimah - Adventure & Mountains',
        content: `
            <div class="experience-highlights">
                <div class="highlight-card">
                    <h5>Mountain Adventures</h5>
                    <p>Jebel Jais mountain, world's longest zipline, and breathtaking hiking trails</p>
                </div>
                <div class="highlight-card">
                    <h5>Outdoor Activities</h5>
                    <p>Desert adventures, beach resorts, and adrenaline-pumping experiences</p>
                </div>
                <div class="highlight-card">
                    <h5>Natural Beauty</h5>
                    <p>Diverse landscapes from mountains to beaches, hot springs, and nature reserves</p>
                </div>
            </div>

            <div class="modal-section">
                <h4>Adventure Attractions</h4>
                <div class="included-grid">
                    <div class="included-card standard">
                        <h5>Jebel Jais</h5>
                        <ul>
                            <li>World's longest zipline (2.8km)</li>
                            <li>Jebel Jais Flight zipline</li>
                            <li>Mountain hiking trails</li>
                            <li>Via Ferrata climbing</li>
                            <li>Scenic viewing decks</li>
                        </ul>
                    </div>
                    <div class="included-card premium">
                        <h5>Desert & Nature</h5>
                        <ul>
                            <li>Desert safari experiences</li>
                            <li>Fossil Rock formations</li>
                            <li>Mangrove kayaking</li>
                            <li>Flamingo watching</li>
                            <li>Hot springs visits</li>
                        </ul>
                    </div>
                    <div class="included-card vip">
                        <h5>Beaches & Resorts</h5>
                        <ul>
                            <li>Al Marjan Island resorts</li>
                            <li>Beach clubs & water sports</li>
                            <li>Luxury spa experiences</li>
                            <li>Sunset beach dining</li>
                            <li>Island hopping tours</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4>Planning Your Visit</h4>
                <div class="logistics-info">
                    <div class="logistics-card">
                        <h5>Getting There</h5>
                        <p><strong>From Dubai:</strong> 1.5 hours<br>
                        <strong>From Abu Dhabi:</strong> 2 hours<br>
                        <strong>Airport:</strong> RAK International</p>
                    </div>
                    <div class="logistics-card">
                        <h5>Best Time</h5>
                        <p><strong>Cool Season:</strong> Nov-Mar<br>
                        <strong>Mountain Weather:</strong> 10°C cooler<br>
                        <strong>Adventure Season:</strong> Oct-Apr</p>
                    </div>
                    <div class="logistics-card">
                        <h5>Recommended Stay</h5>
                        <p><strong>Day Trip:</strong> Jebel Jais focus<br>
                        <strong>2 Days:</strong> Mountains + beach<br>
                        <strong>Weekend:</strong> Full experience</p>
                    </div>
                </div>
            </div>

            <div class="modal-guide-hint">
                <p><strong>Pro tip:</strong> Book through our Partner links to enjoy discounts of up to 25% — at no extra cost to you, it also helps us keep this guide running</p>
            </div>
        `
    },
    'fujairah': {
        title: 'Fujairah - Historic Sites & Beaches',
        content: `
            <div class="experience-highlights">
                <div class="highlight-card">
                    <h5>Historic Heritage</h5>
                    <p>Ancient forts, archaeological sites, and traditional mountain villages</p>
                </div>
                <div class="highlight-card">
                    <h5>Pristine Beaches</h5>
                    <p>Indian Ocean coastline with clear waters, diving spots, and coral reefs</p>
                </div>
                <div class="highlight-card">
                    <h5>Mountain Landscapes</h5>
                    <p>Hajar Mountains, wadis (valleys), and traditional terraced farming</p>
                </div>
            </div>

            <div class="modal-section">
                <h4>Fujairah Highlights</h4>
                <div class="included-grid">
                    <div class="included-card standard">
                        <h5>Historical Sites</h5>
                        <ul>
                            <li>Fujairah Fort (oldest in UAE)</li>
                            <li>Al Bidyah Mosque (oldest mosque)</li>
                            <li>Fujairah Heritage Village</li>
                            <li>Archaeological sites</li>
                            <li>Traditional mountain villages</li>
                        </ul>
                    </div>
                    <div class="included-card premium">
                        <h5>Natural Attractions</h5>
                        <ul>
                            <li>Snoopy Island diving</li>
                            <li>Al Aqah Beach</li>
                            <li>Wadi Wurayah National Park</li>
                            <li>Hot springs at Ain Al Madhab</li>
                            <li>Masafi Friday Market</li>
                        </ul>
                    </div>
                    <div class="included-card vip">
                        <h5>Adventure Activities</h5>
                        <ul>
                            <li>Scuba diving & snorkeling</li>
                            <li>Mountain hiking & wadis</li>
                            <li>Beach resort experiences</li>
                            <li>Cultural village tours</li>
                            <li>Photography expeditions</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4>Visit Information</h4>
                <div class="logistics-info">
                    <div class="logistics-card">
                        <h5>Access Routes</h5>
                        <p><strong>From Dubai:</strong> 2 hours via mountains<br>
                        <strong>Scenic Route:</strong> Through Hajar Mountains<br>
                        <strong>Coastal Route:</strong> Alternative path</p>
                    </div>
                    <div class="logistics-card">
                        <h5>Best Experiences</h5>
                        <p><strong>History:</strong> Fort & heritage sites<br>
                        <strong>Nature:</strong> Beaches & diving<br>
                        <strong>Culture:</strong> Traditional villages</p>
                    </div>
                    <div class="logistics-card">
                        <h5>Ideal Duration</h5>
                        <p><strong>Day Trip:</strong> Key highlights<br>
                        <strong>Overnight:</strong> Beach resort stay<br>
                        <strong>Weekend:</strong> Full exploration</p>
                    </div>
                </div>
            </div>

            <div class="modal-guide-hint">
                <p><strong>Pro tip:</strong> Book through our Partner links to enjoy discounts of up to 25% — at no extra cost to you, it also helps us keep this guide running</p>
            </div>
        `
    },
    'umm-al-quwain': {
        title: 'Umm Al Quwain - Water Sports & Traditions',
        content: `
            <div class="experience-highlights">
                <div class="highlight-card">
                    <h5>Water Sports Paradise</h5>
                    <p>Mangrove islands, water skiing, jet skiing, and peaceful lagoons</p>
                </div>
                <div class="highlight-card">
                    <h5>Traditional Fishing</h5>
                    <p>Authentic fishing village experience and traditional dhow boat trips</p>
                </div>
                <div class="highlight-card">
                    <h5>Peaceful Retreat</h5>
                    <p>Quiet alternative to busier emirates with natural beauty and serenity</p>
                </div>
            </div>

            <div class="modal-section">
                <h4>UAQ Experiences</h4>
                <div class="included-grid">
                    <div class="included-card standard">
                        <h5>Water Activities</h5>
                        <ul>
                            <li>Mangrove island tours</li>
                            <li>Water skiing & jet skiing</li>
                            <li>Traditional fishing trips</li>
                            <li>Kayaking in lagoons</li>
                            <li>Sunset boat cruises</li>
                        </ul>
                    </div>
                    <div class="included-card premium">
                        <h5>Cultural Sites</h5>
                        <ul>
                            <li>UAQ National Museum</li>
                            <li>Old town exploration</li>
                            <li>Traditional souks</li>
                            <li>Falaj Al Mualla historical site</li>
                            <li>Local fishing harbors</li>
                        </ul>
                    </div>
                    <div class="included-card vip">
                        <h5>Nature & Wildlife</h5>
                        <ul>
                            <li>Al Sinniyah Island</li>
                            <li>Bird watching spots</li>
                            <li>Mangrove conservation areas</li>
                            <li>Dreamland Aqua Park</li>
                            <li>Desert camping experiences</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4>Visiting UAQ</h4>
                <div class="logistics-info">
                    <div class="logistics-card">
                        <h5>Location</h5>
                        <p><strong>From Dubai:</strong> 1 hour<br>
                        <strong>From Sharjah:</strong> 45 minutes<br>
                        <strong>Coastal Position:</strong> Arabian Gulf</p>
                    </div>
                    <div class="logistics-card">
                        <h5>Best For</h5>
                        <p><strong>Water Sports:</strong> Year-round activities<br>
                        <strong>Peaceful Retreat:</strong> Away from crowds<br>
                        <strong>Family Time:</strong> Safe & relaxed</p>
                    </div>
                    <div class="logistics-card">
                        <h5>Recommended Visit</h5>
                        <p><strong>Half Day:</strong> Water activities<br>
                        <strong>Day Trip:</strong> Complete experience<br>
                        <strong>Weekend:</strong> Leisure & relaxation</p>
                    </div>
                </div>
            </div>

            <div class="modal-guide-hint">
                <p><strong>Pro tip:</strong> Book through our Partner links to enjoy discounts of up to 25% — at no extra cost to you, it also helps us keep this guide running</p>
            </div>
        `
    }
};

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
    fine: {
        title: 'Fine Dining & Celebrity Chef',
        venues: [
            { name: 'Dinner by Heston Blumenthal', type: 'British ⭐⭐', emirate: 'Dubai', description: 'Historic British cuisine dating back 700 years - Signature "Meat Fruit" dish with traditional Yorkshire pudding' },
            { name: 'Row on 45', type: 'French-Japanese ⭐⭐', emirate: 'Dubai', description: '45th floor with panoramic Dubai views - 17-course tasting menu for only 22 guests by Jason Atherton' },
            { name: 'FZN by Björn Frantzén', type: 'European-Japanese ⭐⭐', emirate: 'Dubai', description: 'Only 27 seats in two-story intimate space - Modern European with Japanese influences and skyline views' },
            { name: 'STAY by Yannick Alléno', type: 'French ⭐⭐', emirate: 'Dubai', description: 'One&Only The Palm island location - "Less is more" French cuisine with surprise tasting menus' },
            { name: 'Al Muntaha', type: 'European ⭐', emirate: 'Dubai', description: '27th floor Burj Al Arab location - Floor-to-ceiling windows with European cuisine and Mediterranean touches' },
            { name: 'Jara by Martín Berasategui', type: 'Basque ⭐⭐⭐⭐⭐', emirate: 'Dubai', description: '8-Michelin star chefs first Dubai restaurant - Traditional Basque family-style with clay-pit oven specialties' },
            { name: 'Erth', type: 'Emirati ⭐', emirate: 'Abu Dhabi', description: 'First Michelin-starred Emirati restaurant - Modern Emirati cuisine in Qasr Al Hosn cultural district' },
            { name: 'Hakkasan', type: 'Cantonese ⭐', emirate: 'Abu Dhabi', description: 'Emirates Palace location - Contemporary Cantonese with Peking Duck and caviar specialty' },
            { name: 'COYA', type: 'Peruvian ⭐⭐⭐⭐⭐', emirate: 'Abu Dhabi', description: 'Vibrant Peruvian fusion at Four Seasons - Chilean Sea Bass with Pisco Sour cocktails and live Latin music' },
            { name: 'Seascape Restaurant', type: 'International ⭐⭐⭐⭐', emirate: 'Ajman', description: 'Waterfront fine dining with Arabian Gulf views - International cuisine with fresh seafood focus away from Dubai crowds' }
        ]
    },
    international: {
        title: 'International Cuisine',
        venues: [
            { name: 'Orfali Bros Bistro', type: 'Syrian Fusion ⭐⭐⭐⭐⭐', emirate: 'Dubai', description: '#1 MENA restaurant - Syrian brothers\' story-driven dining with Greek, Asian, and Middle Eastern fusion' },
            { name: 'Zuma Dubai', type: 'Japanese ⭐⭐⭐⭐⭐', emirate: 'Dubai', description: 'Contemporary Japanese robatayaki in DIFC - Miso black cod signature with trendy atmosphere and live DJ evenings' },
            { name: '3Fils', type: 'Asian Fusion ⭐⭐⭐⭐⭐', emirate: 'Dubai', description: 'Asian-fusion waterfront with Instagram appeal - Wagyu sliders and truffle dishes in casual fine dining setting' },
            { name: 'BOCA', type: 'Contemporary ⭐⭐⭐⭐⭐', emirate: 'Dubai', description: '#12 MENA ranking contemporary international - Four Seasons DIFC with modern European techniques' },
            { name: 'Juns', type: 'Asian-Western ⭐⭐⭐⭐', emirate: 'Dubai', description: 'Third-culture cuisine by Chef Kelvin Cheung - Asian-Western hybrid dishes with innovative presentations' },
            { name: 'Long Teng Seafood', type: 'Chinese ⭐⭐⭐⭐', emirate: 'Dubai', description: 'Live seafood tanks for freshness - Best dim sum in Dubai with family-style sharing portions' },
            { name: 'LPM Abu Dhabi', type: 'French-Mediterranean ⭐⭐⭐⭐⭐', emirate: 'Abu Dhabi', description: 'Al Maryah Island location - Provence-inspired menu with extensive French wine list and marina views' },
            { name: 'BB Social Dining', type: 'Asian Fusion ⭐⭐⭐⭐⭐', emirate: 'Abu Dhabi', description: 'Creative Asian fusion from Dubai import - Dim sum and habibti bao specialties at Rosewood with "achingly cool" vibe' },
            { name: 'Li Jiang', type: 'Pan-Asian ⭐⭐⭐⭐⭐', emirate: 'Abu Dhabi', description: 'Asian fusion with Sheikh Zayed Grand Mosque views - Hand-pulled noodles and pan-Asian menu variety' },
            { name: 'Wardat Beijing Restaurant', type: 'Indo-Chinese ⭐⭐⭐⭐', emirate: 'Ajman', description: 'Nepali chef creating Indian-influenced Chinese - Generous portions at competitive prices with attentive service' }
        ]
    },
    local: {
        title: 'Authentic Middle Eastern & Emirati',
        venues: [
            { name: 'Al Fanar Restaurant', type: 'Emirati ⭐⭐⭐⭐', emirate: 'Dubai', description: 'Traditional Emirati with vintage UAE decor - Machboos spiced rice and Harees with Arabic coffee service' },
            { name: 'Bait Maryam', type: 'Palestinian-Levantine ⭐⭐⭐⭐⭐', emirate: 'Dubai', description: '#15 MENA ranking - Homestyle cooking by female Palestinian chef with traditional family recipes' },
            { name: 'Three by Eva', type: 'Palestinian-Levantine ⭐⭐⭐⭐', emirate: 'Dubai', description: 'Contemporary Palestinian-Levantine by female chef - Modern interpretation with storytelling menu explaining cultural significance' },
            { name: 'Al Nafoorah', type: 'Lebanese ⭐⭐⭐⭐⭐', emirate: 'Dubai', description: 'Lebanese fine dining at Jumeirah Al Qasr - Premium mezze selection with live Arabic music and traditional atmosphere' },
            { name: 'Awtar', type: 'Lebanese ⭐⭐⭐⭐⭐', emirate: 'Dubai', description: 'Lebanese specializing in hummus Beiruti - Traditional preparation methods with family-style sharing portions' },
            { name: 'Arabian Tea House', type: 'Emirati ⭐⭐⭐⭐', emirate: 'Dubai', description: 'Old Dubai courtyard in historic Bastakiya district - Traditional Emirati teas and Arabic coffee cultural immersion' },
            { name: 'Martabaan by Hemant Oberoi', type: 'Indian ⭐⭐⭐⭐⭐', emirate: 'Abu Dhabi', description: 'Emirates Palace location - Authentic Indian cuisine with exceptional seafood and varqui crab specialty' },
            { name: 'Al Khayma Heritage', type: 'Emirati ⭐⭐⭐⭐', emirate: 'Abu Dhabi', description: 'Bedouin tent dining with traditional atmosphere - Emirati machboos and grilled meats with cultural shows' },
            { name: 'Em Sherif Sea Café', type: 'Lebanese ⭐⭐⭐⭐⭐', emirate: 'Abu Dhabi', description: 'Corniche beachfront Lebanese - Comprehensive Arabic menu with mezze selection, indoor and outdoor terrace options' },
            { name: 'Charsi Restaurant', type: 'Afghan ⭐⭐⭐⭐', emirate: 'Ajman', description: 'Authentic Shinwari Afghan cuisine - Live meat selection with Afghani Pulao and aromatic spices' }
        ]
    },
    rooftop: {
        title: 'Rooftop & Scenic Waterfront Dining',
        venues: [
            { name: 'Pierchic', type: 'Italian ⭐⭐⭐⭐⭐', emirate: 'Dubai', description: 'Overwater Italian dining at Madinat Jumeirah - Direct water views from all tables with sustainable seafood' },
            { name: 'Ibn Al Bahr', type: 'Seafood ⭐⭐⭐⭐', emirate: 'Dubai', description: 'Affordable beachside seafood on Palm Jumeirah - Direct beach access with fresh catch daily and palm tree setting' },
            { name: 'Blu Sky Lounge', type: 'International ⭐⭐⭐⭐⭐', emirate: 'Dubai', description: 'Dubai skyline panorama with rooftop infinity pool setting - Sunset timing perfect for Western dinner preferences' },
            { name: 'Secret Garden by VII', type: 'Seafood ⭐⭐⭐⭐⭐', emirate: 'Dubai', description: 'Enchanting garden atmosphere with twinkling lights - Seafood bar with Instagram-worthy presentation' },
            { name: 'At.mosphere (Burj Khalifa)', type: 'International ⭐⭐⭐⭐⭐', emirate: 'Dubai', description: 'Worlds highest restaurant on 122nd floor - 360-degree views with international fine dining and European techniques' },
            { name: 'Shimmers', type: 'Greek ⭐⭐⭐⭐⭐', emirate: 'Dubai', description: 'Beachfront Greek cuisine with Arabian Gulf views - Jumeirah Beach access with fresh seafood grilled with Greek herbs' },
            { name: 'Azura Panoramic Lounge', type: 'International ⭐⭐⭐⭐⭐', emirate: 'Abu Dhabi', description: 'St. Regis Nation Towers 74th floor - Highest dining in Abu Dhabi with 360-degree revolving restaurant views' },
            { name: 'SAL Saadiyat Island', type: 'Mediterranean ⭐⭐⭐⭐⭐', emirate: 'Abu Dhabi', description: 'Beachfront Mediterranean with white sand beach access - Saadiyat Island cultural district with sunset terrace' },
            { name: 'Café Del Mar Abu Dhabi', type: 'Mediterranean ⭐⭐⭐⭐⭐', emirate: 'Abu Dhabi', description: 'Sunset dining with Mediterranean vibes - Beach club atmosphere with international DJs and Arabian Gulf views' },
            { name: 'Al Sakher (Ajman Saray)', type: 'Seafood ⭐⭐⭐⭐⭐', emirate: 'Ajman', description: 'Overwater dining on stilts extending into Arabian Gulf - Traditional dhow boat transfers with fresh seafood and Emirati preparation' }
        ]
    },
    'dubai-mall': {
        title: 'Dubai Mall - Indoor Entertainment Hub',
        content: `
            <div class="experience-highlights">
                <div class="highlight-card">
                    <h5>Dubai Aquarium & Underwater Zoo</h5>
                    <p>Walk through the world's largest suspended aquarium with over 33,000 marine animals</p>
                </div>
                <div class="highlight-card">
                    <h5>VR Park & Gaming</h5>
                    <p>State-of-the-art virtual reality experiences and arcade games for all ages</p>
                </div>
                <div class="highlight-card">
                    <h5>Ice Rink & Winter Sports</h5>
                    <p>Olympic-size ice skating rink with lessons and equipment rental available</p>
                </div>
            </div>

            <div class="modal-section">
                <h4>Summer Benefits</h4>
                <div class="included-grid">
                    <div class="included-card standard">
                        <h5>Climate Control</h5>
                        <ul>
                            <li>Constant 22°C temperature</li>
                            <li>Premium air conditioning</li>
                            <li>Covered walkways</li>
                            <li>Metro-connected access</li>
                        </ul>
                    </div>
                    <div class="included-card premium">
                        <h5>Family Facilities</h5>
                        <ul>
                            <li>Stroller-friendly pathways</li>
                            <li>Baby changing facilities</li>
                            <li>Family prayer rooms</li>
                            <li>Kids play areas</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4>What's Included</h4>
                <p><strong>Mall Access:</strong> Free entry to shopping areas and food courts</p>
                <p><strong>Paid Attractions:</strong> Aquarium, VR Park, and Ice Rink require separate tickets</p>
                <p><strong>Summer Discounts:</strong> Up to 30% off attraction combo tickets</p>
            </div>

            <div class="modal-guide-hint">
                <p><strong>Pro tip:</strong> Book attraction combos through our partner links for additional summer discounts</p>
            </div>
        `
    },
    'mall-emirates': {
        title: 'Mall of the Emirates - Alpine Experience',
        content: `
            <div class="experience-highlights">
                <div class="highlight-card">
                    <h5>Ski Dubai</h5>
                    <p>Real snow skiing and snowboarding in 18°C alpine conditions</p>
                </div>
                <div class="highlight-card">
                    <h5>Penguin Encounters</h5>
                    <p>Meet and interact with real penguins in sub-zero environments</p>
                </div>
                <div class="highlight-card">
                    <h5>Luxury Shopping</h5>
                    <p>High-end fashion brands and premium dining options</p>
                </div>
            </div>

            <div class="modal-section">
                <h4>Alpine Experiences</h4>
                <div class="included-grid">
                    <div class="included-card standard">
                        <h5>Snow Park</h5>
                        <ul>
                            <li>2-hour snow play session</li>
                            <li>Winter clothing included</li>
                            <li>Chairlift access</li>
                            <li>Snow activities</li>
                        </ul>
                    </div>
                    <div class="included-card premium">
                        <h5>Ski Lessons</h5>
                        <ul>
                            <li>Professional ski instruction</li>
                            <li>Equipment rental included</li>
                            <li>Beginner to advanced slopes</li>
                            <li>Group or private lessons</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4>Climate & Comfort</h4>
                <p><strong>Temperature:</strong> Main mall 20°C, Ski Dubai 18°C</p>
                <p><strong>Clothing:</strong> Winter gear provided for snow activities</p>
                <p><strong>Summer Special:</strong> 40% off ski packages during peak heat season</p>
            </div>

            <div class="modal-guide-hint">
                <p><strong>Pro tip:</strong> Book early morning sessions for the best snow conditions and smaller crowds</p>
            </div>
        `
    },
    'ibn-battuta': {
        title: 'Ibn Battuta Mall - Cultural Journey',
        content: `
            <div class="experience-highlights">
                <div class="highlight-card">
                    <h5>Six Themed Courts</h5>
                    <p>Experience architecture inspired by India, China, Persia, Egypt, Tunisia, and Andalusia</p>
                </div>
                <div class="highlight-card">
                    <h5>IMAX Cinema</h5>
                    <p>Premium movie experience with latest blockbusters in air-conditioned comfort</p>
                </div>
                <div class="highlight-card">
                    <h5>Family Entertainment</h5>
                    <p>Kids play areas, arcade games, and family dining options throughout themed courts</p>
                </div>
            </div>

            <div class="modal-section">
                <h4>Cultural Themes</h4>
                <div class="included-grid">
                    <div class="included-card standard">
                        <h5>Eastern Courts</h5>
                        <ul>
                            <li>India Court - Traditional architecture</li>
                            <li>China Court - Imperial palace design</li>
                            <li>Persia Court - Ancient Persian motifs</li>
                            <li>Cultural exhibitions</li>
                        </ul>
                    </div>
                    <div class="included-card premium">
                        <h5>Western Courts</h5>
                        <ul>
                            <li>Egypt Court - Pharaonic themes</li>
                            <li>Tunisia Court - Islamic architecture</li>
                            <li>Andalusia Court - Spanish Moorish style</li>
                            <li>Photo opportunities</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4>Facilities</h4>
                <p><strong>Temperature:</strong> Consistent 20°C throughout all courts</p>
                <p><strong>Accessibility:</strong> Metro-connected with covered walkways</p>
                <p><strong>Summer Offer:</strong> 25% off cinema tickets and dining combos</p>
            </div>

            <div class="modal-guide-hint">
                <p><strong>Pro tip:</strong> Visit during weekdays for the best cultural photography without crowds</p>
            </div>
        `
    },
    'marina-mall': {
        title: 'Dubai Marina Mall - Waterfront Experience',
        content: `
            <div class="experience-highlights">
                <div class="highlight-card">
                    <h5>Marina Views</h5>
                    <p>Stunning waterfront views of luxury yachts and modern architecture</p>
                </div>
                <div class="highlight-card">
                    <h5>Premium Dining</h5>
                    <p>International restaurants with Marina views and outdoor terraces</p>
                </div>
                <div class="highlight-card">
                    <h5>Entertainment Complex</h5>
                    <p>Bowling, arcade games, and family entertainment zones</p>
                </div>
            </div>

            <div class="modal-section">
                <h4>Marina Experience</h4>
                <div class="included-grid">
                    <div class="included-card standard">
                        <h5>Shopping & Dining</h5>
                        <ul>
                            <li>Marina-view restaurants</li>
                            <li>International fashion brands</li>
                            <li>Covered outdoor terraces</li>
                            <li>Yacht watching areas</li>
                        </ul>
                    </div>
                    <div class="included-card premium">
                        <h5>Entertainment Zone</h5>
                        <ul>
                            <li>Bowling alley with Marina views</li>
                            <li>Arcade and gaming center</li>
                            <li>Kids activity areas</li>
                            <li>Event spaces</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h4>Location Benefits</h4>
                <p><strong>Temperature:</strong> 21°C with sea breeze circulation</p>
                <p><strong>Views:</strong> Direct Marina and yacht views from dining areas</p>
                </div>

            <div class="modal-guide-hint">
                <p><strong>Pro tip:</strong> Visit during sunset hours for the best Marina views and photo opportunities</p>
            </div>
        `
    }
};

// Add Beat the Heat modals
modalContent['dubai-mall'] = {
    title: 'Dubai Mall - Indoor Entertainment Hub',
    content: `
        <div class="experience-highlights">
            <div class="highlight-card">
                <h5>House of Hype</h5>
                <p>Dubai's mega immersive wonderland with 18 themed worlds and 100+ interactive experiences</p>
            </div>
            <div class="highlight-card">
                <h5>Content Creation Hub</h5>
                <p>Social media-ready spaces with green screen studios, gaming zones, and Instagram-worthy backdrops</p>
            </div>
            <div class="highlight-card">
                <h5>Ice Rink & Winter Sports</h5>
                <p>Olympic-size ice skating rink with lessons and equipment rental available</p>
            </div>
        </div>

        <div class="modal-booking-section">
            <h5>Temperature: 22°C - Perfect Climate Control</h5>
            <div class="booking-buttons">
                <a href="https://dubai.platinumlist.net/event-tickets/house-of-hype-dubai-mall" class="btn btn-primary" target="_blank" rel="noopener">Book House of Hype</a>
                <a href="https://dubai.platinumlist.net/event-tickets/dubai-ice-rink?ref=yjzkmgy&link=" class="btn btn-secondary" target="_blank" rel="noopener">Ice Rink Tickets</a>
            </div>
        </div>

    `
};

modalContent['mall-emirates'] = {
    title: 'Mall of the Emirates - Alpine Experience',
    content: `
        <div class="experience-highlights">
            <div class="highlight-card">
                <h5>Ski Dubai</h5>
                <p>Real snow skiing and snowboarding in 18°C alpine conditions</p>
            </div>
            <div class="highlight-card">
                <h5>Penguin Encounters</h5>
                <p>Meet and interact with real penguins in sub-zero environments</p>
            </div>
            <div class="highlight-card">
                <h5>Snow Activities</h5>
                <p>Sledding, snowball fights, and snow angel making for all ages</p>
            </div>
        </div>

        <div class="modal-booking-section">
            <h5>Temperature: 18°C - Real Alpine Climate</h5>
            <div class="booking-buttons">
                <a href="https://dubai.platinumlist.net/event-tickets/ski-dubai" class="btn btn-primary" target="_blank" rel="noopener">Book Ski Dubai</a>
                <a href="https://dubai.platinumlist.net/event-tickets/ski-dubai-snow-premium-with-penguin-encounter" class="btn btn-secondary" target="_blank" rel="noopener">Penguin Encounters</a>
            </div>
        </div>

    `
};

modalContent['ibn-battuta'] = {
    title: 'Ibn Battuta Mall - Cultural Journey',
    content: `
        <div class="experience-highlights">
            <div class="highlight-card">
                <h5>Six Themed Courts</h5>
                <p>Experience architecture inspired by India, China, Persia, Egypt, Tunisia, and Andalusia</p>
            </div>
            <div class="highlight-card">
                <h5>IMAX Cinema</h5>
                <p>Premium movie experience with latest blockbusters in air-conditioned comfort</p>
            </div>
            <div class="highlight-card">
                <h5>Cultural Shopping</h5>
                <p>Unique boutiques and authentic cultural artifacts from around the world</p>
            </div>
        </div>

        <div class="modal-booking-section">
            <h5>Temperature: 20°C - Cultural Comfort | Free Entry</h5>
        </div>

        <div class="modal-guide-hint">
            <p><strong>Pro tip:</strong> Each court represents a different region - plan 2-3 hours to explore all themed areas</p>
        </div>
    `
};

modalContent['marina-mall'] = {
    title: 'Dubai Marina Mall - Waterfront Experience',
    content: `
        <div class="experience-highlights">
            <div class="highlight-card">
                <h5>Marina Views</h5>
                <p>Stunning waterfront views of luxury yachts and modern architecture</p>
            </div>
            <div class="highlight-card">
                <h5>Premium Dining</h5>
                <p>International restaurants with Marina views and outdoor terraces</p>
            </div>
            <div class="highlight-card">
                <h5>Evening Entertainment</h5>
                <p>Live music and entertainment venues with sophisticated atmosphere</p>
            </div>
        </div>

        <div class="modal-booking-section">
            <h5>Temperature: 21°C - Marina Breeze | Free Entry</h5>
        </div>

        <div class="modal-guide-hint">
            <p><strong>Pro tip:</strong> Visit during sunset hours for the best Marina views and photo opportunities</p>
        </div>
    `
};

// Debug: Check modalContent construction
console.log('modalContent construction complete');
console.log('Total keys:', Object.keys(modalContent).length);
console.log('Has dubai-mall?', modalContent.hasOwnProperty('dubai-mall'));
console.log('Has mall-emirates?', modalContent.hasOwnProperty('mall-emirates'));

// Modal Functions - Global scope
window.openModal = function(type) {
    console.log('Opening modal:', type);
    console.log('Available modal keys:', Object.keys(modalContent));
    console.log('Looking for key:', `'${type}'`);
    console.log('Key exists?', modalContent.hasOwnProperty(type));

    // Direct test for our problematic keys
    console.log('Direct test dubai-mall:', !!modalContent['dubai-mall']);
    console.log('Direct test mall-emirates:', !!modalContent['mall-emirates']);
    console.log('Direct test ibn-battuta:', !!modalContent['ibn-battuta']);
    console.log('Direct test marina-mall:', !!modalContent['marina-mall']);

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
        console.error('Available modal types:', Object.keys(modalContent));
    }
}

window.closeModal = function() {
    console.log('Closing modal');
    const modal = document.getElementById('modal-overlay');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Platinumlist Integration Configuration - removed duplicate declaration

function generatePlatinumlistUrl(experienceId) {
    return `${platinumlistConfig.baseUrl}experience/${experienceId}?${platinumlistConfig.trackingParam}=${platinumlistConfig.affiliateCode}`;
}

window.bookExperience = function(platform, experienceId) {
    if (platform === 'platinumlist') {
        // PlatinumList experience URLs
        const experienceUrls = {
            'burj-khalifa': 'https://dubai.platinumlist.net/event-tickets/at-the-top?ref=yjzkmgy&link=',
            'theme-parks': 'https://dubai.platinumlist.net/event-tickets/img-worlds-of-adventure?ref=yjzkmgy&link=',
            'desert-safari': 'https://dubai.platinumlist.net/attraction/desertsafaris?ref=yjzkmgy&link=',
            'aquarium': 'https://dubai.platinumlist.net/event-tickets/dubai-aquarium-underwater-zoo-penguin-cove-nursery-experience?ref=yjzkmgy&link=',
            'skydiving': 'https://dubai.platinumlist.net/attraction/skydive-dubai?ref=yjzkmgy&link=',
            'yacht': 'https://dubai.platinumlist.net/attraction/attractions-yacht-brunches?ref=yjzkmgy&link=',
            'louvre-abu-dhabi': 'https://abu-dhabi.platinumlist.net/event-tickets/louvre-abu-dhabi-museum-light-and-peace-museum',
            'yas-island': 'https://abu-dhabi.platinumlist.net/event-tickets/yas-island-theme-parks-ferrari-world-abu-dhabi-yas-waterworld-warner-bros-world'
        };

        const affiliateUrl = experienceUrls[experienceId];

        if (affiliateUrl) {
            window.open(affiliateUrl, '_blank');

            // Track the click for analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'affiliate_click', {
                    'platform': 'platinumlist',
                    'experience_id': experienceId
                });
            }
        } else {
            console.log(`No PlatinumList URL found for experience: ${experienceId}`);
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

// Beat the Heat Category Functions
window.showHeatCategory = function(category, targetElement) {
    // Update active tab
    document.querySelectorAll('.heat-tab').forEach(tab => {
        tab.classList.remove('active');
    });

    if (targetElement) {
        targetElement.classList.add('active');
    }

    // Heat category content
    const heatCategories = {
        shopping: {
            title: 'Luxury Shopping Malls with Attractions',
            stat: '38% of Western tourist summer activities',
            attractions: [
                {
                    name: 'Dubai Mall',
                    features: ['Worlds largest aquarium', 'VR Park gaming', 'Ice rink skating', 'Fashion Avenue luxury'],
                    temp: '22°C',
                    discount: '30% OFF',
                    highlight: 'Aquarium + VR + Ice Rink'
                },
                {
                    name: 'Mall of the Emirates',
                    features: ['Ski Dubai snow experience', 'Luxury brand outlets', 'Cinema complex', 'Family entertainment'],
                    temp: '18°C',
                    discount: '40% OFF',
                    highlight: 'Sub-zero Alpine Experience'
                },
                {
                    name: 'City Centre Mirdif',
                    features: ['Exclusive beach clubs', 'Premium shopping', 'Family zones', 'Covered walkways'],
                    temp: '20°C',
                    discount: '25% OFF',
                    highlight: 'Beach Club Access'
                }
            ]
        },
        culture: {
            title: 'Cultural Indoor Experiences',
            stat: '29% of Western tourists seeking authentic experiences',
            attractions: [
                {
                    name: 'Louvre Abu Dhabi',
                    features: ['World-class art collection', 'Saadiyat Cultural District', 'Interactive exhibits', 'Educational programs'],
                    temp: '21°C',
                    discount: '35% OFF',
                    highlight: 'Global Art Masterpieces'
                },
                {
                    name: 'Museum of the Future',
                    features: ['Futuristic exhibitions', 'Interactive technology', 'Climate innovation', 'Space exploration'],
                    temp: '23°C',
                    discount: '20% OFF',
                    highlight: 'Tomorrows Technology Today'
                },
                {
                    name: 'Dubai Opera',
                    features: ['World-class performances', 'Cultural events', 'Premium dining', 'Architectural marvel'],
                    temp: '22°C',
                    discount: '50% OFF',
                    highlight: 'Live Cultural Performances'
                }
            ]
        },
        sports: {
            title: 'Indoor Sports & Adventure Activities',
            stat: '26% of Western visitors seeking active entertainment',
            attractions: [
                {
                    name: 'Ski Dubai',
                    features: ['Sub-zero alpine experience', 'Penguin encounters', 'Snow activities', 'Winter sports'],
                    temp: '-4°C',
                    discount: '45% OFF',
                    highlight: 'Real Snow in the Desert'
                },
                {
                    name: 'CLYMB Abu Dhabi',
                    features: ['Indoor climbing walls', 'Skydiving simulator', 'Adventure courses', 'Fitness challenges'],
                    temp: '19°C',
                    discount: '30% OFF',
                    highlight: 'Worlds Largest Climbing Wall'
                },
                {
                    name: 'Bounce Dubai',
                    features: ['Trampoline parks', 'Ninja courses', 'Basketball zones', 'Family activities'],
                    temp: '20°C',
                    discount: '35% OFF',
                    highlight: 'Ultimate Trampoline Experience'
                }
            ]
        }
    };

    const contentDiv = document.getElementById('heat-content');
    const categoryData = heatCategories[category];

    if (categoryData) {
        let html = `
            <div class="heat-category-header">
                <h3>${categoryData.title}</h3>
                <p class="category-stat">${categoryData.stat}</p>
            </div>
            <div class="heat-attractions">
        `;

        categoryData.attractions.forEach(attraction => {
            html += `
                <div class="heat-attraction-card">
                    <div class="attraction-header">
                        <h4>${attraction.name}</h4>
                        <div class="attraction-badges">
                            <span class="temp-badge">${attraction.temp}</span>
                            <span class="discount-badge">${attraction.discount}</span>
                        </div>
                    </div>
                    <div class="attraction-highlight">
                        <span class="highlight-icon">BEST</span>
                        <span class="highlight-text">${attraction.highlight}</span>
                    </div>
                    <div class="attraction-features">
                        ${attraction.features.map(feature => `
                            <div class="feature-item">
                                <span class="feature-icon">+</span>
                                <span class="feature-text">${feature}</span>
                            </div>
                        `).join('')}
                    </div>
                    <div class="attraction-action">
                        <button class="heat-book-btn" onclick="bookHeatExperience('${attraction.name.toLowerCase().replace(/\s+/g, '-')}')">
                            Book Summer Deal
                        </button>
                    </div>
                </div>
            `;
        });

        html += '</div>';
        contentDiv.innerHTML = html;
    }
}

// Heat Experience Booking
window.bookHeatExperience = function(attractionId) {
    // For now, this can link to general booking or specific partner URLs
    console.log('Booking heat experience:', attractionId);
    // You can add specific booking URLs later
    alert('Summer booking coming soon! Contact us for exclusive deals.');
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
    showDining('fine');

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

        // Experience cards - open modal for experience details
        if (e.target.closest('.experience-card') || e.target.closest('.emirate-card')) {
            const card = e.target.closest('.experience-card') || e.target.closest('.emirate-card');
            const experienceId = card.dataset.experience;

            // If clicking the book button, handle booking (experience cards only)
            if (e.target.classList.contains('book-btn') && e.target.textContent.includes('Book')) {
                if (experienceId) {
                    bookExperience('platinumlist', experienceId);
                }
                return;
            }

            // If clicking the explore button or anywhere else on card, open modal
            if (experienceId && modalContent[experienceId]) {
                openModal(experienceId);
            }
        }

        // Escape cards - open modal for mall details
        if (e.target.closest('.escape-card')) {
            console.log('Escape card clicked!');
            const card = e.target.closest('.escape-card');
            const modalType = card.dataset.modal;
            console.log('Modal type:', modalType);
            if (modalType) {
                console.log('Calling openModal with:', modalType);
                openModal(modalType);
            } else {
                console.log('No modal type found on card');
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

.experience-details {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--space-md);
    margin: var(--space-lg) 0;
}

.detail-card {
    background: var(--surface-light);
    border-radius: var(--radius-sm);
    padding: var(--space-md);
    text-align: center;
}

.detail-card h5 {
    color: var(--primary);
    font-weight: 600;
    margin-bottom: var(--space-sm);
    font-size: 14px;
}

.detail-card p {
    color: var(--text-primary);
    font-weight: 500;
    margin: 0;
}

.booking-options {
    margin: var(--space-lg) 0;
}

.booking-options h5 {
    color: var(--text-primary);
    margin-bottom: var(--space-md);
    font-weight: 600;
}

.booking-options ul {
    list-style: none;
    padding: 0;
}

.booking-options li {
    padding: var(--space-sm) 0;
    border-bottom: 1px solid var(--border-light);
}

.booking-options li:last-child {
    border-bottom: none;
}

.booking-note {
    background: var(--primary-light);
    color: var(--primary-dark);
    padding: var(--space-md);
    border-radius: var(--radius-sm);
    margin-top: var(--space-lg);
    font-weight: 500;
    text-align: center;
}

.dress-requirements {
    background: var(--warning-light);
    padding: var(--space-lg);
    border-radius: var(--radius-sm);
    margin: var(--space-lg) 0;
}

.dress-requirements h5 {
    color: var(--warning-dark);
    margin-bottom: var(--space-md);
    font-weight: 600;
}

/* New Enhanced Modal Styles */
.experience-highlights {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-lg);
    margin: var(--space-lg) 0;
}

.highlight-card {
    background: var(--surface-light);
    border-radius: var(--radius-sm);
    padding: var(--space-lg);
    text-align: center;
    border: 1px solid var(--border-light);
}

.highlight-icon {
    font-size: 2rem;
    margin-bottom: var(--space-sm);
    display: block;
}

.highlight-card h5 {
    color: var(--text-primary);
    font-weight: 600;
    margin-bottom: var(--space-sm);
}

.highlight-card p {
    color: var(--text-secondary);
    font-size: 14px;
    line-height: 1.5;
}

.included-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--space-lg);
    margin: var(--space-lg) 0;
}

.included-card {
    background: white;
    border-radius: var(--radius-sm);
    padding: var(--space-lg);
    border: 2px solid var(--border-light);
    transition: border-color 0.2s ease;
}

.included-card.standard {
    border-color: #4ade80;
}

.included-card.premium {
    border-color: #f59e0b;
}

.included-card.vip {
    border-color: #8b5cf6;
}

.included-card h5 {
    color: var(--text-primary);
    font-weight: 600;
    margin-bottom: var(--space-md);
    font-size: 16px;
}

.included-card ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.included-card li {
    padding: var(--space-xs) 0;
    color: var(--text-secondary);
    font-size: 14px;
}

.logistics-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--space-lg);
    margin: var(--space-lg) 0;
}

.logistics-card {
    background: var(--surface-light);
    border-radius: var(--radius-sm);
    padding: var(--space-lg);
    text-align: center;
}

.logistics-icon {
    font-size: 1.5rem;
    margin-bottom: var(--space-sm);
    display: block;
}

.logistics-card h5 {
    color: var(--text-primary);
    font-weight: 600;
    margin-bottom: var(--space-sm);
}

.logistics-card p {
    color: var(--text-secondary);
    font-size: 14px;
    line-height: 1.5;
}

.info-list p {
    color: var(--text-secondary);
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: var(--space-md);
    padding: var(--space-sm) 0;
    border-bottom: 1px solid var(--border-light);
}

.info-list p:last-child {
    border-bottom: none;
}

.testimonials {
    margin: var(--space-lg) 0;
}

.testimonials blockquote {
    background: var(--surface-light);
    border-left: 4px solid var(--primary);
    margin: var(--space-md) 0;
    padding: var(--space-lg);
    font-style: italic;
    color: var(--text-secondary);
}

.testimonials cite {
    display: block;
    margin-top: var(--space-sm);
    font-style: normal;
    font-weight: 600;
    color: var(--primary);
    font-size: 14px;
}

.booking-partners {
    display: grid;
    gap: var(--space-md);
    margin: var(--space-lg) 0;
}

.partner-option-card {
    background: white;
    border: 2px solid var(--border-light);
    border-radius: var(--radius-sm);
    padding: var(--space-lg);
    display: flex;
    align-items: center;
    gap: var(--space-md);
    cursor: pointer;
    transition: all 0.2s ease;
}

.partner-option-card:hover {
    border-color: var(--primary);
    box-shadow: var(--shadow-md);
}

.partner-logo {
    font-size: 2rem;
    min-width: 50px;
    text-align: center;
}

.partner-details {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
}

.partner-name {
    font-weight: 600;
    color: var(--text-primary);
    font-size: 16px;
}

.partner-desc {
    color: var(--text-secondary);
    font-size: 14px;
}

.partner-price {
    color: var(--primary);
    font-weight: 600;
}

.book-now-btn {
    background: var(--primary);
    color: white;
    padding: var(--space-sm) var(--space-lg);
    border-radius: var(--radius-sm);
    font-weight: 600;
    min-width: 100px;
    text-align: center;
}

.modal-guide-hint {
    background: var(--primary-light);
    color: var(--primary-dark);
    padding: var(--space-lg);
    border-radius: var(--radius-sm);
    margin-top: var(--space-lg);
    text-align: center;
}

.guide-link {
    color: var(--primary);
    text-decoration: underline;
    font-weight: 600;
}
`;

// Inject additional CSS
const style = document.createElement('style');
style.textContent = additionalCSS;
document.head.appendChild(style);

// Digital Products Purchase Functionality
const productLinks = {
    'packing-list': 'https://eternabasics.myshopify.com/products/uae-ultimate-interactive-packing-guide',
    'instamoments': 'https://eternabasics.myshopify.com/products/uae-insta-moment-ultimate-photography-golden-hour-guide-1',
    'survival': 'https://eternabasics.myshopify.com/products/uae-survival-arabic-phrases-apps'
};

function purchaseProduct(productId) {
    const productUrl = productLinks[productId];

    if (productUrl) {
        // Track purchase click for analytics (if needed)
        console.log(`Purchase clicked for: ${productId}`);

        // Open product page in new tab
        window.open(productUrl, '_blank');
    } else {
        console.error(`Product link not found for: ${productId}`);
        alert('Product link not available. Please try again later.');
    }
}

// Weather Data Functionality - Using OpenWeatherMap API
async function fetchWeatherData() {
    // City coordinates for UAE emirates (more accurate than city names)
    const cityCoordinates = {
        'Dubai': { lat: 25.2048, lon: 55.2708 },
        'Abu Dhabi': { lat: 24.4539, lon: 54.3773 },
        'Sharjah': { lat: 25.3463, lon: 55.4209 },
        'Ajman': { lat: 25.4052, lon: 55.5136 },
        'Umm Al Quwain': { lat: 25.5231, lon: 55.5567 },
        'Ras Al Khaimah': { lat: 25.7889, lon: 55.9751 },
        'Fujairah': { lat: 25.1188, lon: 56.3269 }
    };

    const weatherWidgets = document.querySelectorAll('.weather-widget');

    // Process each weather widget
    for (let widget of weatherWidgets) {
        const city = widget.getAttribute('data-city');
        const tempElement = widget.querySelector('.temp');

        if (!cityCoordinates[city]) {
            tempElement.textContent = '--°';
            widget.classList.add('error');
            continue;
        }

        try {
            widget.classList.add('loading');
            const coords = cityCoordinates[city];

            // Using free OpenWeatherMap API with no key required for basic data
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&units=metric&appid=5a4b2d457ecbef9eb2a71e480b947604`
            );

            if (response.ok) {
                const data = await response.json();
                const temperature = Math.round(data.main.temp);
                tempElement.textContent = `${temperature}°C`;
                widget.classList.remove('loading', 'error');

                // Add weather icon if available
                if (data.weather && data.weather[0] && data.weather[0].icon) {
                    widget.setAttribute('title', data.weather[0].description);
                }
            } else {
                throw new Error('Weather API request failed');
            }
        } catch (error) {
            console.warn(`Failed to fetch weather for ${city}:`, error);
            // Fallback to realistic mock data
            const fallbackTemps = {
                'Dubai': 32,
                'Abu Dhabi': 31,
                'Sharjah': 33,
                'Ajman': 30,
                'Umm Al Quwain': 29,
                'Ras Al Khaimah': 28,
                'Fujairah': 30
            };
            tempElement.textContent = `${fallbackTemps[city] || 30}°C`;
            widget.classList.remove('loading');
            widget.classList.add('error');
        }
    }
}

// Add click tracking for analytics (optional)
document.addEventListener('DOMContentLoaded', function() {
    // Initialize weather widgets
    if (document.querySelector('.weather-widget')) {
        fetchWeatherData();

        // Update weather every 10 minutes
        setInterval(fetchWeatherData, 10 * 60 * 1000);
    }

    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Only track if clicking on the card itself, not the button
            if (e.target.classList.contains('product-btn')) {
                return; // Let the button handle its own click
            }

            const productId = this.dataset.product;
            console.log(`Product card viewed: ${productId}`);
        });
    });
});

// Progressive Disclosure Booking System Functions
function showMainTab(tabName) {
    // Remove active class from all main tabs
    document.querySelectorAll('.main-tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Add active class to clicked tab
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

    // Hide all booking content
    document.querySelectorAll('.booking-content').forEach(content => {
        content.classList.remove('active');
    });

    // Show selected tab content
    document.getElementById(`${tabName}-content`).classList.add('active');

    // If hotels tab is selected, ensure beachfront tab is active by default
    if (tabName === 'hotels') {
        showHotelCategory('beachfront');
    }
}

function showHotelCategory(categoryName) {
    // Remove active class from all category tabs
    document.querySelectorAll('.category-tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Add active class to clicked category tab
    document.querySelector(`[data-category="${categoryName}"]`).classList.add('active');

    // Hide all hotel category content
    document.querySelectorAll('.hotel-category-content').forEach(content => {
        content.classList.remove('active');
    });

    // Show selected category content
    document.getElementById(`${categoryName}-hotels`).classList.add('active');
}

function searchFlights() {
    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;
    const departureDate = document.getElementById('departure-date').value;
    const returnDate = document.getElementById('return-date').value;

    // Build Skyscanner affiliate URL (placeholder)
    const affiliateId = 'your-affiliate-id'; // Replace with actual affiliate ID
    const skyscannerUrl = `https://www.skyscanner.com/transport/flights/${departure}/${destination}/${departureDate}/${returnDate}/?associateid=${affiliateId}`;

    // Open in new tab
    window.open(skyscannerUrl, '_blank');

    console.log('Flight search:', { departure, destination, departureDate, returnDate });
}

// Image Loading Optimization
document.addEventListener('DOMContentLoaded', function() {
    // Handle lazy loading animation
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    lazyImages.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });

        // If image is already loaded
        if (img.complete) {
            img.classList.add('loaded');
        }
    });
});
