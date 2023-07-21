const VnScript = {
    common: {
        appName: 'VNA',
        save: "Lưu",
        close: "Đóng",
        confirm: "Xác nhận",
        create: "Tạo mới ",
        delete: "Xóa",
        deleteSpecific: (name: String) => `Xóa ${name}`,
        edit: "Cập nhật",
        detail: "Chi tiết",
        search: "Tìm kiếm",
        changeStatus: "Thay đổi trạng thái",
        gobackHome: "Trở về trang chủ",
        next: 'Tiếp tục',
        back: 'Quay lại',
        reset: "Đặt lại",
        loadMore: "Xem thêm",
        notification: "Thông báo",
        no: "Không",
        yes: "Có",
        export: {
            _: "Xuất dữ liệu",
            all: "Tất cả",
            currentPage: "Trang hiện tại",
            currentSelect: "Đang lựa chọn"
        },
        notify: {
            warningDelete: (name: string) => `Bạn có chắc muốn xóa ${name} này không?`,
            warningChangeStatus: (name: string) => `Bạn có chắc muốn thay đổi trạng thái của ${name} này không?`,
            createSuccess: (name: string) => `Tạo mới ${name} thành công`,
            deleteSuccess: (name: string) => `Xóa ${name} thành công`,
            editSuccess: (name: string) => `Cập nhật ${name} thành công`,
            changeStatusSuccess: "Thay đổi trạng thái thành công"
        },
        form: {
            require: "Vui lòng không bỏ trống trường này!",
            invalidPhone: "Số điện thoại không đúng định dạng!",
            invalidEmail: "Email không đúng định dạng!",
            invalidLength: "Vui lòng điền đúng độ dài!",
            invalidAmount: "Vui lòng điền đúng số lượng!"
        },
        tabClose: {
            currentTab: "Đóng tab hiện tại",
            otherTab: "Đóng các tab khác",
            allTab: "Đóng tất cả tab"
        },
        createAt: "Tạo lúc",
        createBy: "Tạo bởi",
        updateAt: "Cập nhật lúc",
        updateBy: "Cập nhật bởi",
        action: "Thao tác",
        status: "Trạng thái",
        active: "Hoạt động",
        deActive: "Không hoạt động",
        show: "Hiện",
        hide: "Ẩn"
    },
    menu: {
        header: {
            Points: "Điểm",
            AccountBalance: "Số dư",
            AccountInfo: "Thông tin tài khoản",
            AvailableBalance: "Số dư khả dụng",
            ChangePass: "Thay đổi mật khẩu",
            Logout: "Đăng xuất"
        },
        home: "Trang chủ",
        profile: "Thông tin cá nhân",
        booking: "Đặt vé",
        addOnService: "Thêm dịch vụ",
        topUp: "Nạp tiền",
        bookingManagement: "Quản lý đặt vé",
        pointManagement: "Quản lý điểm",
        report: "Báo cáo",
        reports: "Báo cáo",
        configTimezone: "Cấu hình múi giờ",
        corporateAccount: "Tài khoản người dùng",
        fundsTransfer: "Quỹ tài khoản",
        userReport: "Báo cáo người dùng",
        agentManagement: "Quản lý đại lý",
        subAgentManagement: "Quản lý đại lý phụ",
        subAgentCreate: "Tạo đại lý phụ",
        subAgentDetail: "Chi tiết đại lý phụ",
        subAgentUpdate: "Cập nhật đại lý phụ",
        agentCreation: "Tạo mới đại lý",
        agentUpdation: "Cập nhật đại lý",
        agentDetail: "Chi tiết đại lý",
        news: "Tin tức",
        newsManagement: "Quản lý tin tức",
        createNews: "Tạo mới News",
        updateNews: "Cập nhật News",
        newsArticle: "Quản lý bài viết",
        newsCategory: "Quản lý thể loại",
        category: "Danh mục",
        article: "Bài viết",
        userManagement: "Quản lý người dùng",
        userCreate: "Tạo mới người dùng",
        userUpdate: "Cập nhật người dùng",
        userDetail: "Chi tiết người dùng",
        systemManagement: "Quản lý hệ thống",
        caManagement: "Quản lý CA",
        caCreation: "Tạo mới CA",
        caUpdation: "Cập nhật CA",
        caDetail: "Chi tiết CA",
        administrativeReport: "Báo cáo hành chính",
        operationalReport: "Báo cáo hoạt động",
        topUpManagement: "Quản lý nạp tiền",
        agent: "Đại lý",
        roleManagement: "Quản lý vai trò",
        roleCreate: "Tạo mới vai trò",
        roleUpdate: "Cập nhật vai trò",
        roleDetail: "Chi tiết vai trò",
        listPermission: "Danh sách quyền"

    },
    page: {

        404: {
            pageTitle: "Trang không tồn tại"
        },
        403: {
            pageTitle: "Trang không có quyền truy cập"
        },
        500: {
            pageTitle: "Máy chủ xảy ra lỗi"
        },
        category: {
            _: "Danh mục",
            formName: "Tạo mới danh mục",
            categoryName: "Tên danh mục",
            position: "Vị trí",
            creator: "Tác giả"
        },
        article: {
            _: "Bài viết",
            formName: "Tạo bài viết mới",
            articleTitle: "Tiêu đề bài viết",
            description: "Mô tả",
            image: "Ảnh",
            author: "Tác giả",
            catagory: "Danh mục",
            preview: "Xem trước",
            content: "Nội dung"
        },
        agent: {
            _: "Đại lý",
            email: "Email",
            agentName: "Tên đại lý",
            subAgent: "Đại lý phụ",
            phoneNumber: "Số điện thoại",
            country: "Quốc gia",
            area: "Khu vực",
            timeZone: "Múi giờ",
            minLimit: "Tài sản tối thiểu",
            maxLimit: "Tài sản tối đa",
            address: "Địa chỉ",
            description: "Mô tả",
            agentInformation: {
                language: "Ngôn ngữ",
                province: "Tỉnh",
                zipcode: "Mã bưu điện",
                ward: "Phường",
                district: "Quận/Huyện",
                businessCode: "Mã số kinh doanh",
                legalRepresentation: "Người đại diện pháp luật",
                bankAccount: "Tài khoản ngân hàng",
                taxCode: "Mã số thuế",
                position: "Vị trí",
                accountHolder: "Tên tài khoản",
                arcCode: "Mã IATA/ARC",
                website: "Website",
                bankName: "Tên ngân hàng"
            },
            committedRevenue: {
                interRevenue: "Quốc tế (USD/tháng)",
                domRevenue: "Nội địa (VND/tháng)"
            },
            form: {
                agentInformation: "Thông tin đại lý",
                registrationArea: "Khu vực đăng ký",
                committedRevenue: "Cam kết doanh thu",
                accountCreditLimit: "Giới hạn tài khoản tín dụng"
            },
            resCountry: "Đất nước đăng ký",
        },
        users: {
            _: "Tài khoản",
            formName: "Tạo mới tài khoản",
            password: "Mật khẩu",
            confirmPassword: "Xác nhận mật khẩu",
            email: "Email",
            userName: "Tên tài khoản",
            phoneNumber: "Số điện thoại",
            fullName: "Tên đầy đủ",
            agent: "Đại lý",
            roles: "Vai trò",
            organizationID: "Mã ID tổ chức",
            CA: "CA",
            none: "Không"
        },
        booking: {
            _: "Đặt vé",
            step1: {
                _: "Đặt vé",
                roundTrip: "Khứ hồi",
                oneWay: "Một chiều",
                multiStop: "Nhiều chặng",
            },
            step2: "Thông tin khách hàng",
            step3: "Dịch vụ bổ trợ",
            step4: "Xác nhận",
            step5: "Thanh toán",
        },
        role: {
            _: "Vai trò",
            roleName: "Tên vai trò",
            description: "Mô tả",
            viewPermission: "Xem quyền",
            function: "Chức năng",
            permission: "Quyền",
            create: "Tạo",
            edit: "Chỉnh sửa",
            view: "Xem",
            delete: "Xóa",
            approve: "Phê duyệt"
            // report: "Báo cáo",
            // reportAgent: "Báo cáo đại lý",
            // booking: "Đặt chỗ",
            // changeFlights: "Thay đổi chuyến bay",
            // addCACode: "Thêm mã CA",
            // addonService: "Dịch vụ bổ sung"
        },
        CA: {
            _: "CA",
            //CAName: "Tên CA",
            country: "Quốc gia",
            email: "Email",
            phoneNumber: "Số điện thoại",
            timeZone: "Múi giờ",
            form: {
                corporateInformation: "Thông tin bên CA",
                legalRepresentation: "Người đại diện pháp luật",
                registration: "Đăng ký",
                registrationArea: "Khu vực đăng ký",
                committedRevenue: "Cam kết doanh thu",
                agentRegistration: "Đại lý đăng ký"
            },
            corporateInformation: {
                vnCAName: "Tên CA Tiếng Việt",
                enCAName: "Tên CA Tiếng Anh",
                language: "Ngôn ngữ",
                agentName: "Tên đại lý",
                province: "Tỉnh",
                zipcode: "Mã bưu điện",
                ward: "Phường",
                district: "Quận/Huyện",
                address: "Địa chỉ",
                abbreviatedName: "Tên viết tắt",
                businessCode: "Mã số kinh doanh",
                bankAccount: "Tài khoản ngân hàng",
                taxCode: "Mã số thuế",
                issueDate: "Ngày sáng lập",
                issueBy: "Nhà sáng lập",
                accountHolder: "Chủ tài khoản",
                website: "Website",
                bankName: "Tên ngân hàng"
            },
            legalRepresentation: {
                fullName: "Tên đầy đủ",
                typeOfIdentityDocument: "Loại giấy tờ tùy thân",
                regPosition: "Vị trí đăng ký"
            },
            registration: {
                interRevenue: "Quốc tế (USD/tháng)",
                domRevenue: "Nội địa (VND/tháng)",
                agentID: "ID Đại lý"
            }
        },
        addons: {
            _: "Dịch vụ bổ sung",
            eTicketNumber: "Số vé điện tử",
            pnrCode: "Mã PNR",
            servingCA: "Phục vụ CA",
            itinerary: "Hành trình",
            passengerInfo: "Thông tin hành khách",
            reserved: "Chưa xuất vé",
            issued: "Đã xuất vé",
            flightInfo: "Thông tin chuyến bay",
            departing: "Chiều đi",
            returning: "Chiều về",
            adult: "Người lớn",
            child: "Trẻ em",
            infant: "Trẻ sơ sinh",
            tax: "Tax",
            fee: "Phí",
            total: "Tổng số tiền",
            viewDetails: "Thông tin chi tiết",
            pnrIssueDate: "Ngày xuất PNR",
            ticketIssueDate: "Ngày xuất vé",
            successUpdate: "Cập nhật thành công",
            successPayment: "Thanh toán thành công",
            emdCode: "Mã EMD",
            home: "Trang chủ",

            menu: {
                buyExtraBaggage: "Mua thêm hành lý",
                chooseSeat: "Chọn chỗ ngồi",
                ticketUpgrade: "Nâng hạng vé",
                specialService: "Dịch vụ đặc biệt"
            },

            flightDetail: {
                _: "Chi tiết chuyến bay",
                aircraft: "Tên máy bay",
                travelTime: "Thời gian bay",
                departureTerminal: "Ga khởi hành",
                arrivalTerminal: "Ga đến nơi"
            },

            passengerInformation: {
                _: "Thông tin hành khách",
                DOB: "Ngày sinh",
                accompaniedBy: "Đi cùng với",
                travelDocument: {
                    _: "Hộ chiếu",
                    type: "Loại hộ chiếu",
                    number: "Số hộ chiếu",
                    issuingCountry: "Nơi cấp hộ chiếu",
                    region: "Quốc tịch",
                    expiryDate: "Ngày hết hạn",
                },
                residentalAddress: "Địa chỉ nơi cư trú",
                arrivalAddress: "Địa chỉ nơi đến",
                address: {
                    streetAddress: "Địa chỉ",
                    city: "Thành phố",
                    province: "Quận/huyện",
                    zipCode: "Mã bưu điện",
                    country: "Quốc gia"
                },
                visaInformation: {
                    _: "Thông tin Visa",
                    number: "Số Visa",
                    issuingPlace: "Nơi cấp",
                    expiryDate: "Ngày hết hạn",
                    region: "Quốc tịch",
                    POB: "Nơi sinh",
                }
            },
            buyExtraPackage: {
                chooseFlight: "Lựa chọn chuyến bay",
                description: "Mua thêm hành lý cho chuyến bay của bạn.",
                package: "Hành lý",
                totalSize: "Tổng chiều dài",
                bookedBaggage: "Hành lý đã đặt",
                extraBaggage: "Hành lý thêm",
                successNote: "Cập nhật hành lý thành công, thông tin chuyến bay sẽ được gửi đến email của quý khách."
            },
            chooseSeat: {
                selectSeat: "Lựa chọn chỗ ngồi",
                description: "Chọn chỗ ngồi của bạn dựa trên bản đồ chỗ ngồi.",
                seat: "Chỗ ngồi",
                unavaliableSeat: "Chỗ ngồi không khả dụng",
                avaliableSeat: "Chỗ ngồi khả dụng",
                emergencyExit: "Lối thoát hiểm",
                successNote: "Cập nhật chỗ ngồi thành công, thông tin chuyến bay sẽ được gửi đến email của quý khách."
            },
            ticketUpgrade: {
                chooseClass: "Lựa chọn hạng vé",

                ticket: "Vé",
                upgradeTo: "Nâng lên thành",
                economyClassic: "Phổ thông tiêu chuẩn",
                businessClassic: "Thương gia tiêu chuẩn",
                businessFlex: "Thương gia linh hoạt",
                successNote: "Cập nhật hạng vé thành công, thông tin chuyến bay sẽ được gửi đến email của quý khách.",
            },
            specialService: {
                chooseService: "Lựa chọn dịch vụ đặc biệt",
                description: "Thêm dịch vụ đặc biệt cho chuyến bay của bạn.",
                specialMeals: "Suất ăn đặc biệt",
                bassinetService: "Dịch vụ nôi trẻ em",
                wheelchair: "Dịch vụ xe lăn",
                blindPass: "Dịch vụ cho khách hàng khiếm thị",
                deafPass: "Dịch vụ cho khách hàng khiếm thính",
                specialBaggage: "Dịch vụ hành lý đặc biệt",
                extraSeat: "Dịch vụ thêm chỗ ngồi",
                oxygen: "Dịch vụ oxy y tế",
                stretcher: "Dịch vụ cáng y tế",
                pregnant: "Dịch vụ cho hành khách mang thai",
                bassinetInfant: "Dịch vụ nôi cho trẻ sơ sinh",
                meetAndGreet: "Dịch vụ đón và đưa dẫn ưu tiên",
                animalDisable: "Service animal accompanying disabilities",
                medicalClearance: "Dịch vụ khám sức khỏe hành khách",
                successNote: "Cập nhật dịch vụ đặc biệt thành công, thông tin chuyến bay sẽ được gửi đến email của quý khách."
            },
            payment: {
                paymentMethod: "Chọn phương thức thanh toán",
                creditLimitAccount: "Số dư tài khoản",
                viaAmadeus: "Theo Amadeus",
            }
        },
        point: {
            _: "Điểm",
            eTicketNumber: "Số vé điện tử",
            pnrCode: "Mã PNR",
            servingCA: "Phục vụ CA",
            itinerary: "Hành trình",
            passengerInfo: "Thông tin hành khách",
            reserved: "Chưa xuất vé",
            issued: "Đã xuất vé",
            flightInfo: "Thông tin chuyến bay",
            departing: "Chiều đi",
            returning: "Chiều về",
            adult: "Người lớn",
            child: "Trẻ em",
            infant: "Trẻ sơ sinh",
            tax: "Tax",
            fee: "Phí",
            total: "Tổng số tiền",
            viewDetails: "Thông tin chi tiết",
            pnrIssueDate: "Ngày xuất PNR",
            ticketIssueDate: "Ngày xuất vé",
            successUpdate: "Cập nhật thành công",
            successPayment: "Thanh toán thành công",
            emdCode: "Mã EMD",
            home: "Trang chủ",
            menu: {
                bookingTicket: "Đặt vé",
                buyExtraBaggage: "Mua thêm hành lý",
                chooseSeat: "Chọn chỗ ngồi",
                ticketUpgrade: "Nâng hạng vé",
                businessLounge: "Phòng chờ thương gia",
                offerIncentive: "Gửi yêu cầu cấp ưu đãi"
            },

            flightDetail: {
                _: "Chi tiết chuyến bay",
                aircraft: "Tên máy bay",
                travelTime: "Thời gian bay",
                departureTerminal: "Ga khởi hành",
                arrivalTerminal: "Ga đến nơi"
            },

            passengerInformation: {
                _: "Thông tin hành khách",
                title: "Danh xưng",
                firstName: "Tên",
                lastName: "Họ",
                DOB: "Ngày sinh",
                accompaniedBy: "Đi cùng với",
                phoneNumber: "Số điện thoại",
                ffp: {
                    _: "Khách hàng thường xuyên",
                    airline: "Hãng hàng không",
                    ffn: "Số thẻ FFP"
                },
                travelDocument: {
                    _: "Hộ chiếu",
                    type: "Loại hộ chiếu",
                    number: "Số hộ chiếu",
                    issuingCountry: "Nơi cấp hộ chiếu",
                    region: "Quốc tịch",
                    expiryDate: "Ngày hết hạn",
                },
                residentalAddress: "Địa chỉ nơi cư trú",
                arrivalAddress: "Địa chỉ nơi đến",
                address: {
                    streetAddress: "Địa chỉ",
                    city: "Thành phố",
                    province: "Quận/huyện",
                    zipCode: "Mã bưu điện",
                    country: "Quốc gia"
                },
                visaInformation: {
                    _: "Thông tin Visa",
                    number: "Số Visa",
                    issuingPlace: "Nơi cấp",
                    expiryDate: "Ngày hết hạn",
                    region: "Quốc tịch",
                    POB: "Nơi sinh",
                }
            },

            bookingTicket: {
                selectFlight: {
                    _: "Chọn chuyến bay",
                    roundTrip: "Khứ hồi",
                    oneWay: "Một chiều",
                    multipleDes: "Nhiều chặng",
                    passenger: "Hành khách",
                    filters: "Bộ lọc",
                    economy: {
                        _: "Phổ thông",
                        economySuperLite: "Phổ thông siêu tiết kiệm",
                        economyLite: "Phổ thông tiết kiệm",
                        economyClassic: "Phổ thông tiêu chuẩn",
                        economyFlex: "Phổ thông linh hoạt"
                    },
                    business: {
                        _: "Thương gia",
                        businessClassic: "Thương gia tiêu chuẩn",
                        businessFlex: "Thương gia linh hoạt"
                    },
                    operatedBy: "Khai thác bởi",
                    free: "Miễn phí",
                    notAllowed: "Không cho phép",
                    chargeFee: "Trả phí",
                    soldOut: "Hết vé",
                    noMatchingFlight: "Không có chuyến bay nào.",

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
                    _: "Xác nhận",
                    generalFareRule: "Điều kiện giá cơ bản",
                    freeBaggageAllow: "Hành lý miễn cước",

                },
                payment: {
                    _: "Thanh toán",
                    paymentMethod: "Chọn phương thức thanh toán",
                    creditLimitAccount: "Số dư tài khoản",
                    viaAmadeus: "Theo Amadeus",
                },
                successMessage: "Đặt vé thành công",
                pnrCode: "Mã PNR"
            },
            buyExtraPackage: {
                chooseFlight: "Lựa chọn chuyến bay",
                description: "Mua thêm hành lý cho chuyến bay của bạn.",
                package: "Hành lý",
                totalSize: "Tổng chiều dài",
                bookedBaggage: "Hành lý đã đặt",
                extraBaggage: "Hành lý thêm",
                successNote: "Cập nhật hành lý thành công, thông tin chuyến bay sẽ được gửi đến email của quý khách."
            },
            chooseSeat: {
                selectSeat: "Lựa chọn chỗ ngồi",
                description: "Chọn chỗ ngồi của bạn dựa trên bản đồ chỗ ngồi.",
                seat: "Chỗ ngồi",
                unavaliableSeat: "Chỗ ngồi không khả dụng",
                avaliableSeat: "Chỗ ngồi khả dụng",
                emergencyExit: "Lối thoát hiểm",
                successNote: "Cập nhật chỗ ngồi thành công, thông tin chuyến bay sẽ được gửi đến email của quý khách."
            },
            ticketUpgrade: {
                chooseClass: "Lựa chọn hạng vé",
                description: "Nâng hạng vé của bạn.",
                ticket: "Vé",
                upgradeTo: "Nâng lên thành",
                economyClassic: "Phổ thông tiêu chuẩn",
                businessClassic: "Thương gia tiêu chuẩn",
                businessFlex: "Thương gia linh hoạt",
                successNote: "Cập nhật hạng vé thành công, thông tin chuyến bay sẽ được gửi đến email của quý khách.",
            },
            businessLounge: {
                _: "Phòng chờ thương gia",
                description: "Chọn hành khách cần đặt phòng chờ thương gia.",
                successNote: "Cập nhật phòng chờ thương gia thành công, thông tin chuyến bay sẽ được gửi đến email của quý khách."
            },
            offerIncentive: {
                offerCode: "Mã yêu cầu",
                request: "Yêu cầu",
                createReq: "Tạo yêu cầu",
                viewReq: "Xem yêu cầu",
                editReq: "Sửa yêu cầu",
                deleteReq: "Xóa yêu cầu",
                addReq: "Thêm yêu cầu",
                reqType: "Loại yêu cầu",
                subject: "Đối tượng",
                fullName: "Họ tên",
                phoneNumber: "Số điện thoại",
                lotusmilesCardNo: "Số thẻ Bông Sen Vàng",
                ticketNumber: "Số vé",
                flight: "Chuyến bay",
                departure: "Ngày khởi hành",
                time: "Giờ khởi hành",
                note: "Ghi chú",
                addMoreFlight: "Thêm chuyến bay",
                addPassenger: "Thêm hành khách",
                type: {
                    tickets: {
                        _: "Vé",
                        ticketInfo: "Thông tin vé",
                        serviceClass: "Hạng dịch vụ",
                        bookingClass: "Hạng đặt chỗ",
                    },
                    changeTickets: {
                        _: "Thay đổi vé",
                        newTicketInfo: "Thông tin vé mới",
                        oldTicket: "Số vé cũ",
                        newFlight: "Chuyến bay mới",
                        newDeparture: "Ngày khởi hành mới",
                        newTime: "Giờ khởi hành mới"
                    },
                    upgradeTickets: {
                        _: "Nâng hạng vé",
                        upgradeTicketInfo: "Thông tin nâng hạng vé",
                        upgradeType: "Loại nâng hạng",
                        newBookingClass: "Hạng đặt chỗ mới",
                    },
                    extraBaggage: {
                        _: "Hành lý quá cước",
                        extraBaggageInfo: "Thông tin hành lý quá cước",
                        qualityOfPackage: "Số kiện/hành lý"
                    },
                    lotus: {
                        _: "Thẻ Bông Sen Vàng",
                        lotusmilesInfo: "Thông tin thẻ Bông Sen Vàng",
                        newCardClass: "Hạng thẻ mới",
                    },
                    businessLounge: {
                        _: "Phòng chờ thương gia",
                        businessLoungeInfo: "Thông tin phóng chờ thương gia",
                    },
                    others: {
                        _: "Khác",
                        otherReq: "Yêu cầu khác"
                    },
                }
            }
        }
    }

}

export default VnScript