const EnglishScript = {
    common: {
        appName: 'VNA',
        save: "Save",
        close: "Close",
        confirm: "Confirm",
        create: "Create",
        delete: "Delete",
        deleteSpecific: (name: String) => `Delete ${name}`,
        edit: "Edit",
        search: "Search",
        detail: "Detail",
        changeStatus: "Change status",
        gobackHome: "Go back home",
        next: 'Next',
        back: 'Back',
        reset: "Reset",
        loadMore: "Load more",
        showing: "Showing",
        of: "of",
        elements: "elements",
        notification: "Notification",
        no: "No",
        yes: "Yes",
        export: {
            _: "Export",
            all: "All",
            currentPage: "CurrentPage",
            currentSelect: "Selection"
        },
        notify: {
            warningDelete: (name: string) => `Are you sure to delete this ${name}?`,
            warningChangeStatus: (name: string) => `Are you sure to change the status of this ${name}?`,
            createSuccess: (name: string) => `Create ${name} successfully`,
            deleteSuccess: (name: string) => `Delete ${name} successfully`,
            editSuccess: (name: string) => `Edit ${name} successfully`,
            changeStatusSuccess: "Change status successfully"
        },
        form: {
            require: "Please fill this field!",
            invalidPhone: "Invalid phonenumber number!",
            invalidEmail: "Invalid email format!",
            invalidLength: "Invalid length!",
            invalidAmount: "Invalid amount!"
        },
        tabClose: {
            currentTab: "Close current tab",
            otherTab: "Close other tab",
            allTab: "Close all tab"
        },
        createAt: "Create at",
        createBy: "Create by",
        updateAt: "Update at",
        updateBy: "Create by",
        action: "Action",
        status: "Status",
        active: "Active",
        deActive: "Deactive",
        show: "show",
        hide: "hide"
    },
    menu: {
        header: {
            Points: "Points",
            AccountBalance: "Account Balance",
            AccountInfo: "Account Info",
            AvailableBalance: "Available Balance",
            ChangePass: "Change Password",
            Logout: "Logout"
        },
        home: "Home",
        profile: "Profile",
        booking: "Booking",
        addOnService: "Add-on Service",
        topUp: "Top-up",
        bookingManagement: "Booking management",
        pointManagement: "Point management",
        report: "Report",
        reports: "Reports",
        configTimezone: "Config timezone",
        corporateAccount: "Corporate account",
        fundsTransfer: "Funds transfer",
        userReport: "User report",
        agentManagement: "Agent management",
        subAgentManagement: "Sub agent management",
        subAgentCreate: "Create Sub agent",
        subAgentDetail: "Sub agent Information",
        subAgentUpdate: "Edit Sub agent",
        agentCreation: "Create Agent",
        agentUpdation: "Edit Agent",
        agentDetail: "Agent Information",
        news: "News",
        newsManagement: "News management",
        newsArticle: "Article management",
        newsCategory: "Category management",
        createNews: "Create News",
        updateNews: "Cập nhật News",
        category: "Category",
        article: "Article",
        userManagement: "User management",
        userCreate: "Create User",
        userUpdate: "Edit User",
        userDetail: "User Information",
        systemManagement: "System management",
        caManagement: "CA management",
        caCreation: "Create CA",
        caUpdation: "Edit CA",
        caDetail: "CA Information",
        administrativeReport: "Administrative report",
        operationalReport: "Operational report",
        topUpManagement: "Top-up management",
        agent: "Agent",
        roleManagement: "Role management",
        roleCreate: "Create Role",
        roleUpdate: "Edit Role",
        roleDetail: "Role Information",
        listPermission: "List Permission"

    },
    page: {
        404: {
            pageTitle: "Page Not Found"
        },
        403: {
            pageTitle: "Page Not Authorize"
        },
        500: {
            pageTitle: "Server Error"
        },
        category: {
            _: "Category",
            formName: "Create new category",
            categoryName: "Category name",
            position: "Position",
            creator: "Creator"
        },
        article: {
            _: "Article",
            formName: "Create new article",
            articleTitle: "Article Title",
            description: "Description",
            image: "Image",
            author: "Author",
            catagory: "Catagory",
            preview: "Preview",
            content: "Content"
        },
        agent: {
            _: "Agent",
            agentName: "AgentName",
            subAgent: "SubAgent",
            email: "Email",
            phoneNumber: "PhoneNumber",
            country: "Country",
            area: "Area",
            timeZone: "TimeZone",
            minLimit: "MinimumLimit",
            maxLimit: "MaximumLimit",
            address: "Address",
            description: "Description",
            agentInformation: {
                language: "Language",
                province: "Province",
                zipcode: "ZipCode",
                ward: "Ward",
                district: "District",
                businessCode: "Business Code",
                legalRepresentation: "Legal Representation",
                bankAccount: "Bank Account",
                taxCode: "Tax Code",
                position: "Position",
                accountHolder: "Account Holder",
                arcCode: "IATA/ARC Code",
                website: "Website",
                bankName: "Bank Name"
            },
            committedRevenue: {
                interRevenue: "International (USD/month)",
                domRevenue: "Domestic (VND/month)"
            },
            form: {
                agentInformation: "Agent Information",
                registrationArea: "Registration Area",
                committedRevenue: "Committed Revenue",
                accountCreditLimit: "Account Credit Limit"
            },
            resCountry: "Register country"

        },
        users: {
            _: "Account",
            formName: "Create new account",
            password: "Password",
            confirmPassword: "Confirm password",
            userName: "userName",
            email: "Email",
            phoneNumber: "PhoneNumber",
            fullName: "FullName",
            roles: "Roles",
            agent: "Agent",
            organizationID: "Org.ID",
            CA: "Cooperate (CA)",
            none: "None"
        },
        booking: {
            _: "Booking",
            step1: {
                _: "Choose flight",
                roundTrip: "Round Trip",
                oneWay: "One Way",
                multiStop: "Multi stop",

            },
            step2: "Customer information",
            step3: "Addon services",
            step4: "Confirmation",
            step5: "Payment",
        },
        role: {
            _: "Role",
            roleName: "RoleName",
            description: "Description",
            viewPermission: "View Permission",
            function: "Function",
            permission: "Permission",
            create: "Create",
            edit: "Edit",
            view: "View",
            delete: "Delete",
            approve: "Approve"
            // report: "Report",
            // reportAgent: "Report agent",
            // booking: "Booking",
            // changeFlights: "Change flights",
            // addCACode: "Add CA code",
            // addonService: "Add-on service"
        },
        CA: {
            _: "CA",
            country: "Country",
            email: "Email",
            phoneNumber: "PhoneNumber",
            timeZone: "TimeZone",
            form: {
                corporateInformation: "Corporate Information",
                legalRepresentation: "Legal Representation",
                registration: "Registration",
                registrationArea: "Registration Area",
                committedRevenue: "Committed Revenue",
                agentRegistration: "Agent Registration"
            },
            corporateInformation: {
                vnCAName: "Vietnamese CAName",
                enCAName: "English CAName",
                language: "Language",
                agentName: "Agent Name",
                province: "Province",
                zipcode: "ZipCode",
                ward: "Ward",
                district: "District",
                address: "Address",
                abbreviatedName: "Abbreviated Name",
                businessCode: "Business Code",
                bankAccount: "Bank Account",
                taxCode: "Tax Code",
                issueDate: "Issue Date",
                issueBy: "Issue By",
                accountHolder: "Account Holder",
                website: "Website",
                bankName: "Bank Name"
            },
            legalRepresentation: {
                fullName: "Fullname",
                typeOfIdentityDocument: "Type of identity document",
                regPosition: "Registering Position"
            },
            registration: {
                interRevenue: "International (USD/month)",
                domRevenue: "Domestic (VND/month)",
                agentID: "Agent ID"
            }
        },
        addons: {
            _: "",
            eTicketNumber: "E-Ticket Number",
            pnrCode: "PNR Code",
            servingCA: "Serving CA",
            itinerary: "Itinerary",
            passengerInfo: "Passenger Information",
            reserved: "Reserved",
            issued: "Issued",
            flightInfo: "Flight information",
            departing: "Departing",
            returning: "Returning",
            adult: "Adult",
            child: "Child",
            infant: "Infant",
            tax: "Tax",
            fee: "Fee",
            total: "Total",
            viewDetails: "View Details",
            pnrIssueDate: "PNR issued at",
            ticketIssueDate: "Ticket issued at",
            successUpdate: "Update Successfully",
            successPayment: "Payment Successfully",
            emdCode: "EMD Code",
            home: "Homepage",

            menu: {
                buyExtraBaggage: "Buy extra baggage",
                chooseSeat: "Choose seat",
                ticketUpgrade: "Ticket upgrade",
                specialService: "Special service"
            },

            flightDetail: {
                _: "Flight details",
                aircraft: "Aircraft",
                travelTime: "Travel time",
                departureTerminal: "Departure termninal",
                arrivalTerminal: "Arrival terminal"
            },

            passengerInformation: {
                _: "Pasenger Information",
                DOB: "Date of Birth",
                accompaniedBy: "Accompanied By",
                travelDocument: {
                    _: "Travel Document",
                    type: "Travel document type",
                    number: "Travel document number",
                    issuingCountry: "Document Issuing Country",
                    region: "Region",
                    expiryDate: "Expiry Date",
                },
                residentalAddress: "Residential Address",
                arrivalAddress: "Arrival Address",
                address: {
                    streetAddress: "Street Address",
                    city: "City",
                    province: "Province",
                    zipCode: "Postal Code",
                    country: "Country"
                },
                visaInformation: {
                    _: "Visa Information",
                    number: "Visa number",
                    issuingPlace: "Issuing place",
                    expiryDate: "Expiry date",
                    region: "Region",
                    POB: "Place of birth"
                }
            },
            buyExtraPackage: {
                chooseFlight: "Choose flight",
                description: "Buy extra baggage to your flight.",
                package: "Package",
                totalSize: "Total Size",
                bookedBaggage: "Booked Baggage",
                extraBaggage: "Extra Baggage",
                successNote: "Baggage update is successful, flight information will be sent to your email."
            },
            chooseSeat: {
                selectSeat: "Seat Selection",
                description: "Select your seats from the seat map.",
                seat: "Seat",
                unavaliableSeat: "Unavaliable Seat",
                avaliableSeat: "Avaliable Seat",
                emergencyExit: "Emergency Exit",
                successNote: "Seat update is successful, flight information will be sent to your email.",
            },
            ticketUpgrade: {
                chooseClass: "Choose class",
                description: "Upgrade your booking class.",
                ticket: "Ticket",
                upgradeTo: "Upgrade to",
                economyClassic: "Economy Classic",
                businessClassic: "Business Classic",
                businessFlex: "Business Flex",
                successNote: "Upgrade ticket is successful, flight information will be sent to your email."
            },
            specialService: {
                chooseService: "Choose special service",
                description: "Add special services to your flight.",
                specialMeals: "Special Meals",
                bassinetService: "Bassinet Service",
                wheelchair: "Passenger requiring wheelchair",
                blindPass: "Blind passenger service",
                deafPass: "Deaf passenger service",
                specialBaggage: "Special baggage service",
                extraSeat: "Extra seat",
                oxygen: "Passenger requiring oxygen service",
                stretcher: "Passenger requiring stretcher",
                pregnant: "Pregnant passenger",
                bassinetInfant: "Bassinet for infant",
                meetAndGreet: "Meet and greet passenger",
                animalDisable: "Service animal accompanying disabilities",
                medicalClearance: "Passenger requiring medical clearance",
                successNote: "Special service update is successful, flight information will be sent to your email."
            },
            payment: {
                paymentMethod: "Choose method of payment",
                creditLimitAccount: "Credit Limit Account",
                viaAmadeus: "Via Amadeus",
            }
        },
        point: {
            _: "Points",
            eTicketNumber: "E-Ticket Number",
            pnrCode: "PNR Code",
            servingCA: "Serving CA",
            itinerary: "Itinerary",
            passengerInfo: "Passenger Information",
            reserved: "Reserved",
            issued: "Issued",
            flightInfo: "Flight information",
            departing: "Departing",
            returning: "Returning",
            adult: "Adult",
            child: "Child",
            infant: "Infant",
            tax: "Tax",
            fee: "Fee",
            total: "Total",
            viewDetails: "View Details",
            pnrIssueDate: "PNR issued at",
            ticketIssueDate: "Ticket issued at",
            successUpdate: "Update Successfully",
            successPayment: "Payment Successfully",
            emdCode: "EMD Code",
            home: "Homepage",
            menu: {
                bookingTicket: "Booking ticket",
                buyExtraBaggage: "Buy extra baggage",
                chooseSeat: "Choose seat",
                ticketUpgrade: "Ticket upgrade",
                businessLounge: "Business lounge",
                offerIncentive: "Offer incentive"
            },

            flightDetail: {
                _: "Flight details",
                aircraft: "Aircraft",
                travelTime: "Travel time",
                departureTerminal: "Departure termninal",
                arrivalTerminal: "Arrival terminal"
            },

            passengerInformation: {
                _: "Pasenger Information",
                title: "Title",
                firstName: "First Name",
                lastName: "Last Name",
                DOB: "Date of Birth",
                accompaniedBy: "Accompanied By",
                phoneNumber: "Phone number",
                ffp: {
                    _: "Frequent Flyer Program",
                    airline: "Airline",
                    ffn: "Frequent Flyer Number"
                },
                travelDocument: {
                    _: "Travel Document",
                    type: "Travel document type",
                    number: "Travel document number",
                    issuingCountry: "Document Issuing Country",
                    region: "Region",
                    expiryDate: "Expiry Date",
                },
                residentalAddress: "Residential Address",
                arrivalAddress: "Arrival Address",
                address: {
                    streetAddress: "Street Address",
                    city: "City",
                    province: "Province",
                    zipCode: "Postal Code",
                    country: "Country"
                },
                visaInformation: {
                    _: "Visa Information",
                    number: "Visa number",
                    issuingPlace: "Issuing place",
                    expiryDate: "Expiry date",
                    region: "Region",
                    POB: "Place of birth"
                }
            },
            bookingTicket: {
                selectFlight: {
                    _: "Select flight",
                    roundTrip: "Round Trip",
                    oneWay: "One Way",
                    multipleDes: "Multiple Destinations",
                    passenger: "Passenger",
                    economy: {
                        _: "Economy",
                        economySuperLite: "Economy Super Lite",
                        economyLite: "Economy Lite",
                        economyClassic: "Economy Classic",
                        economyFlex: "Economy Flex"
                    },
                    business: {
                        _: "Business",
                        businessClassic: "Business Classic",
                        businessFlex: "Business Flex"
                    },

                },
                // passengerInfo: {
                //     _: "Passenger information",
                //     DOB: "Date of Birth",
                //     accompaniedBy: "Accompanied By",
                //     travelDocument: {
                //         _: "Travel Document",
                //         type: "Travel document type",
                //         number: "Travel document number",
                //         issuingCountry: "Document Issuing Country",
                //         region: "Region",
                //         expiryDate: "Expiry Date",
                //     },
                //     residentalAddress: "Residential Address",
                //     arrivalAddress: "Arrival Address",
                //     address: {
                //         streetAddress: "Street Address",
                //         city: "City",
                //         province: "Province",
                //         zipCode: "Postal Code",
                //         country: "Country"
                //     },
                //     visaInformation: {
                //         _: "Visa Information",
                //         number: "Visa number",
                //         issuingPlace: "Issuing place",
                //         expiryDate: "Expiry date",
                //         region: "Region",
                //         POB: "Place of birth"
                //     }
                // },
                confirm: {
                    _: "Confirm",
                    generalFareRule: "General fare rule",
                    freeBaggageAllow: "Free baggage allowance",
                },
                payment: {
                    _: "Payment",
                    paymentMethod: "Choose method of payment",
                    creditLimitAccount: "Credit Limit Account",
                    viaAmadeus: "Via Amadeus",
                },
                successMessage: "Booking ticket successful",
                pnrCode: "PNR Code"
            },
            buyExtraPackage: {
                package: "Package",
                totalSize: "Total Size",
                bookedBaggage: "Booked Baggage",
                extraBaggage: "Extra Baggage",
                successNote: "Baggage update is successful, flight information will be sent to your email."
            },
            chooseSeat: {
                selectSeat: "Seat Selection",
                seat: "Seat",
                unavaliableSeat: "Unavaliable Seat",
                avaliableSeat: "Avaliable Seat",
                emergencyExit: "Emergency Exit",
                successNote: "Upgrade ticket is successful, flight information will be sent to your email.",
            },
            ticketUpgrade: {
                chooseClass: "Choose class",
                ticket: "Ticket",
                upgradeTo: "Upgrade to",
                economyClassic: "Economy Classic",
                businessClassic: "Business Classic",
                businessFlex: "Business Flex",
                successNote: "Upgrade ticket is successful, flight information will be sent to your email."
            },
            businessLounge: {
                _: "Business lounge",

            },
            offerIncentive: {
                offerCode: "Offer Code",
                request: "Request",
                createReq: "Create request",
                viewReq: "Xem yêu cầu",
                editReq: "Sửa yêu cầu",
                deleteReq: "Xóa yêu cầu",
                addReq: "Add request",
                reqType: "Request type",
                subject: "Subject",
                fullName: "Full name",
                phoneNumber: "Phone number",
                lotusmilesCardNo: "Lotusmiles's card number",
                ticketNumber: "Ticket number",
                flight: "Flight",
                departure: "Departure",
                time: "Time",
                note: "Note",
                addMoreFlight: "Add more flight",
                addPassenger: "Add passenger",
                type: {
                    tickets: {
                        _: "Tickets",
                        ticketInfo: "Ticket information",
                        serviceClass: "Service class",
                        bookingClass: "Booking class",
                    },
                    changeTickets: {
                        _: "Change tickets",
                        newTicketInfo: "New ticket information",
                        oldTicket: "Old ticket number",
                        newFlight: "New flight",
                        newDeparture: "New departure",
                        newTime: "New time"
                    },
                    upgradeTickets: {
                        _: "Upgrade tickets",
                        upgradeTicketInfo: "Upgrade ticket information",
                        upgradeType: "Upgrade type",
                        newBookingClass: "New booking class",
                    },
                    extraBaggage: {
                        _: "Extra baggage",
                        extraBaggageInfo: "Extra baggage information",
                        qualityOfPackage: "qualityOfPackage"
                    },
                    lotus: {
                        _: "Lotusmiles",
                        lotusmilesInfo: "Lotusmiles information",
                        newCardClass: "New card class",
                    },
                    businessLounge: {
                        _: "Business Lounge",
                        businessLoungeInfo: "Business lounge information",
                    },
                    others: {
                        _: "Others",
                        otherReq: "Other request"
                    },
                }
            }
        }
    },


}
export default EnglishScript