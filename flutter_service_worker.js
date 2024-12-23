'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".idea/misc.xml": "356615084338678bf9847c4081496074",
".idea/modules.xml": "9e76b956e97dbf7d14a4b3d83c8c2375",
".idea/vcs.xml": "934f1b0e454736c61b2217e8a8a87b03",
".idea/web.iml": "24742e734b568c3f23d56498828ad0f3",
".idea/workspace.xml": "1e60d8dec6bd5566908fa83d318200d6",
"assets/android/app/build.gradle": "5a8bc5529d6955427ba3b95be795a8cf",
"assets/AssetManifest.bin": "5292a2fbf36bdef2448c3c3b0acfaa1e",
"assets/AssetManifest.bin.json": "64b46b7f4b611f00abd3e2611d3a16ce",
"assets/AssetManifest.json": "a4c35ab84ca5966b7a127d53a0b47f76",
"assets/assets/animations/intro_1.json": "513d787513cffeb0638aaae3e0a3a2f0",
"assets/assets/animations/intro_2.json": "65e3bc9a2e5e9c3b1bf3d0b057135673",
"assets/assets/animations/intro_3.json": "17b1c2cea381d954564408d7178500a9",
"assets/assets/animations/intro_4.json": "6051b119b69d9ed8a6f48246f7e29c20",
"assets/assets/animations/loading.json": "8204daf7b3cccadccfd00eedddefb56e",
"assets/assets/animations/text.json": "bf0d2b3bc8afe9c5eff21e5f28c60803",
"assets/assets/fonts/DMSans-Bold.ttf": "b9cec5212f09838534e6215d1f23ed55",
"assets/assets/fonts/DMSans-Medium.ttf": "24bfda9719b2ba60b94a0f9412757d10",
"assets/assets/fonts/DMSans-Regular.ttf": "7c217bc9433889f55c38ca9d058514d3",
"assets/assets/fonts/Estedad-Bold.ttf": "65475ae4ef29769e0b699fffe210c497",
"assets/assets/fonts/Estedad-Medium.ttf": "a7b1473e887fb4a9adf676ab5b185093",
"assets/assets/fonts/Estedad-Regular.ttf": "8dcf404349d3f5dd9c309aa21b712f71",
"assets/assets/fonts/Estedad-SemiBold.ttf": "ff48875b22759e7c115386ab3e0c1e3a",
"assets/assets/images/default.png": "83677c318ac2fb0b2d51b7f345b39f20",
"assets/assets/images/on_boarding_1.png": "c46a0f1347ed27e63c9e10c1336b5166",
"assets/assets/images/on_boarding_2.png": "603f94fbfdcca1e6fca35535058fed60",
"assets/assets/images/on_boarding_3.png": "e6641aec9f305acc970bb967a6645cf2",
"assets/assets/images/svgs/app_icon.svg": "f854635ddb89949f097d65a8c46cccef",
"assets/assets/images/svgs/bag_fill.svg": "edf77ca3bfab2a69ad7b4dfc263f14c1",
"assets/assets/images/svgs/banks/Ayandeh.svg": "c7f8c29494c9cef8d9fb26d77330c18d",
"assets/assets/images/svgs/banks/Bank%2520Markazi.svg": "f2891136c4087a64b2041cbc60c63cac",
"assets/assets/images/svgs/banks/Bankino.svg": "eb781d91ff543d978565ccdcb1a3df18",
"assets/assets/images/svgs/banks/Blu%2520Bank.svg": "acb6c5bc543cf71aca42b8a061138af8",
"assets/assets/images/svgs/banks/Caspian.svg": "96fbae36530f4417b2af3b8afa062656",
"assets/assets/images/svgs/banks/Dey.svg": "6cd2195edb7fb43b19b6fb38d5cb7499",
"assets/assets/images/svgs/banks/Eghtesad%2520Novin.svg": "9744f3e6df80dbed5ad0af18369f8a1c",
"assets/assets/images/svgs/banks/Futurebank.svg": "473162c510db904ea314768c574fea97",
"assets/assets/images/svgs/banks/Gardeshgari.svg": "abf8e37db6b0629eb88e48bce860a4f2",
"assets/assets/images/svgs/banks/Iran%2520Europe.svg": "9e4ced628c8e1e3ee5276119d1b02ac8",
"assets/assets/images/svgs/banks/Iran%2520Venezuela.svg": "54c9c62c7f257562fa30877c6fe6d2ef",
"assets/assets/images/svgs/banks/Iran%2520Zamin.svg": "8fa86d18cf36e37f870915d9c39fef71",
"assets/assets/images/svgs/banks/Karafarin.svg": "b05cff9fc53ba26a04feecee2873704e",
"assets/assets/images/svgs/banks/Keshavarzi.svg": "a86b392ba12704f9fe21b05f7a35beb0",
"assets/assets/images/svgs/banks/Khavar%2520Mianeh.svg": "0d5dde9077b92b45ac0b6b0834761d90",
"assets/assets/images/svgs/banks/Maskan.svg": "4fc66160d923ea55e39bec3190cb9fa5",
"assets/assets/images/svgs/banks/Mehr%2520Iran.svg": "aa681ab0ab72d2cf4586884fadfb0eac",
"assets/assets/images/svgs/banks/Melall.svg": "c7f8811ecf4f6a259e28e2e5302a5281",
"assets/assets/images/svgs/banks/Mellat.svg": "fdc44692363e521ce283c0dc59adec71",
"assets/assets/images/svgs/banks/Melli.svg": "b679cc3612bb768b3f1e65885f6bddb1",
"assets/assets/images/svgs/banks/Noor.svg": "410a6ca9fbe6eae4da2c8a355fb211df",
"assets/assets/images/svgs/banks/Parsian.svg": "125c5c346dbfdefef11cd5d9be4b932a",
"assets/assets/images/svgs/banks/Pasargad.svg": "6146e3802f90577c259f52639912f495",
"assets/assets/images/svgs/banks/Post.svg": "16a60151e6f974d23e40ea9247a026b7",
"assets/assets/images/svgs/banks/Refah.svg": "b9378ffd0fb65a43a2b460d4e602c7d9",
"assets/assets/images/svgs/banks/Resalat.svg": "b5eb94ddded66b716597b882cc4a43e1",
"assets/assets/images/svgs/banks/Saderat.svg": "553116e3c87a41a239ee24f2b980d168",
"assets/assets/images/svgs/banks/Saman.svg": "be0e065508bc4eb861a23da53f2b5fa6",
"assets/assets/images/svgs/banks/Sanat%2520Madan.svg": "e825bc8586dd26fed5e3f34a7133b537",
"assets/assets/images/svgs/banks/Sarmayeh.svg": "9bc7e4a29b8c015e683192158469ce44",
"assets/assets/images/svgs/banks/Sepah%2520Merged.svg": "743f4bce1078611a2728e7c63149def1",
"assets/assets/images/svgs/banks/Sepah.svg": "6124a715c84a0e18d01fffc7a5f79934",
"assets/assets/images/svgs/banks/Shahr.svg": "4c143565e7d8f545430fa1f7773c8cac",
"assets/assets/images/svgs/banks/Sina.svg": "3cf567603e27613ae3f37f5c0e122314",
"assets/assets/images/svgs/banks/Standard%2520Chartered.svg": "f47332862ac37e1fd5f999591cb6c787",
"assets/assets/images/svgs/banks/Taavon%2520Eslami.svg": "c3fa4d0a85b04dd8131523d3de69e226",
"assets/assets/images/svgs/banks/Tejarat.svg": "ea090184e237fb1b32e8e75726996cec",
"assets/assets/images/svgs/banks/Tosee%2520Saderat.svg": "da7ee4595572b5be0feec6e684c1bc82",
"assets/assets/images/svgs/banks/Tosee%2520Taavon.svg": "a424290242aeac2117d2658ed584fbb3",
"assets/assets/images/svgs/banks/Tosee.svg": "c74e0c4638f60fbb766fc97f308e43ff",
"assets/assets/images/svgs/bank_card_overlay.svg": "279abfc9ea7302bc93a77e5780af9b76",
"assets/assets/images/svgs/bitcoin-card.svg": "57c649be13b452e44546c65d9bcd0bb9",
"assets/assets/images/svgs/bookmarks.svg": "e8edb36d3e1da57010f216a42b231360",
"assets/assets/images/svgs/briefcase.svg": "211fcd4de04016ba38c4a61c3a7b4e77",
"assets/assets/images/svgs/buliding.svg": "686c39a5f3108a59aa60d6584309e7f0",
"assets/assets/images/svgs/buy-crypto.svg": "0a07d98ac86d28fff0e9695ea543707d",
"assets/assets/images/svgs/calling.svg": "734e4292f88e9891ad3da1d8ed658033",
"assets/assets/images/svgs/card-pos.svg": "af122420101a647097c5a370d5edf0c3",
"assets/assets/images/svgs/circle.svg": "6f83b2a10d61b5a30b598acd7503c469",
"assets/assets/images/svgs/create_referral_code.svg": "70ebe96ebf525262ed5272803e397651",
"assets/assets/images/svgs/customerclublogo.svg": "a4cd9dcfcc42f35cdcd0799a750430f8",
"assets/assets/images/svgs/dashboardcrypto.svg": "0374ffd6c28cfff2de7ad9c603541256",
"assets/assets/images/svgs/dashboardincome.svg": "0a871ce214536e54219f5065c4207424",
"assets/assets/images/svgs/dashboardshopping.svg": "2ceb0b2e21dac10863d94379c455731d",
"assets/assets/images/svgs/dashboardsites.svg": "99825b2ac28c257860cc4423cf74ab7f",
"assets/assets/images/svgs/emptyaddress.svg": "75d367a03de4d8c0fe04cedc76ac79cc",
"assets/assets/images/svgs/emptycryptowallet.svg": "a98adba8ea00086205c6299bef4340bd",
"assets/assets/images/svgs/emptyorders.svg": "f2f736d992ba63ad765add433c2d4b16",
"assets/assets/images/svgs/emptytickets.svg": "c1d90664b1154361d9cfe00aa2fa97dc",
"assets/assets/images/svgs/empty_wallet_tick.svg": "a4dd55ef3c458539c76ba81cd39c77a1",
"assets/assets/images/svgs/fb_desc_background.svg": "bdd761a1345c00d6cf2eff573817331d",
"assets/assets/images/svgs/foreground_banner.svg": "ef1a256050f91d02ef48ae22db8b54ec",
"assets/assets/images/svgs/game.svg": "5156bcfb725fe6bc94b3ce98233715f5",
"assets/assets/images/svgs/gift.svg": "c611da2976cab485f194186d38033b72",
"assets/assets/images/svgs/gift_box.svg": "d3c62feaa19afbe49e809967d4a29908",
"assets/assets/images/svgs/icsearchlogo.svg": "7666e069326a44ba691f7a846ed3dd82",
"assets/assets/images/svgs/iran_exchange_logo.svg": "5ed9fd488fd505fe7eaec1ff3eeea22c",
"assets/assets/images/svgs/iran_exchange_solid_logo.svg": "77fcb2cb4ddeb2cd4b2d8ed1973e7efe",
"assets/assets/images/svgs/irclogo.svg": "f82515c3fc91cce60dd4823bb0d4d6c9",
"assets/assets/images/svgs/irclogodark.svg": "6aaac674de4097faeea059330ece66c4",
"assets/assets/images/svgs/ircmainlogo.svg": "49201e4fa1de683f0d7519717d75d8cf",
"assets/assets/images/svgs/irctitlelogo.svg": "5df3ae51f5f1e53bae8d6eeec8cf8e69",
"assets/assets/images/svgs/messages_bubble.svg": "7e180029a85935e1368cbc11f4c2aab6",
"assets/assets/images/svgs/messages_square.svg": "d271dbcbcaf688dc9adca59e1c4e0f37",
"assets/assets/images/svgs/not_found.svg": "54c492ade9b43e154d65edd468e03f2d",
"assets/assets/images/svgs/no_crypto_found.svg": "6b911d590ae2ce71ee50006afb167aa6",
"assets/assets/images/svgs/one_time_virtual_number.svg": "9c7bfcdb9dae88de62fa5be7cc42dfc2",
"assets/assets/images/svgs/paliz_logo.svg": "acdeb9b14980f5a5aca70b4b10dfaa4c",
"assets/assets/images/svgs/paypal.svg": "77eb952ee2ad8e0d3e5d090fdac8fe16",
"assets/assets/images/svgs/prefetchimage.svg": "809f7af0a81c82f6465aeb51e94accfc",
"assets/assets/images/svgs/profile.svg": "f107a21a94affdf59a9896003d3f70b7",
"assets/assets/images/svgs/receive_gift.svg": "24ceda6d549684fc7e161ddd2c3732ee",
"assets/assets/images/svgs/release_note.svg": "92b21447de6ed753460a5c037d5d4151",
"assets/assets/images/svgs/scrollable_background_banner.svg": "37122d9654df57b07a65c68c4807c544",
"assets/assets/images/svgs/searchprofile.svg": "e4b9b60c3d9f1ec15516dd7f8621cbd0",
"assets/assets/images/svgs/selected-crypto.svg": "c5a74081610756bfe1c7bd25eb8e7798",
"assets/assets/images/svgs/shopping-bag.svg": "53d3cb9fc33793981b5ff73baccc5dcc",
"assets/assets/images/svgs/should_have_vpn.svg": "d85360e9f87e559a882b2a5206f20639",
"assets/assets/images/svgs/star_search.svg": "38f141dba2a643f40f1da57c766bfefe",
"assets/assets/images/svgs/stock.svg": "0c9f8b400ca4354b08a4dd78b22407bb",
"assets/assets/images/svgs/stock_unavailable.svg": "623344b4b0564722d95af5dd43e98e85",
"assets/assets/images/svgs/undraw_mobile_pay.svg": "a2c5f69dd3d9c2986bed1bc9b9b39fa1",
"assets/assets/images/svgs/update.svg": "82731a7329e980bc006732cc166662eb",
"assets/assets/images/svgs/up_by_gateway_limit.svg": "f81459d825ae064dbfee3e68cc58060c",
"assets/assets/images/svgs/user_tick.svg": "d511ca86dbe097b894787c58c0cdda63",
"assets/assets/images/svgs/virtual_card.svg": "66f3074c69aa2d49d7a0b6ca5bce194d",
"assets/assets/images/svgs/wallet-profile-icon.svg": "570473c832b428d54d80ff897d0909ca",
"assets/assets/images/svgs/wallet.svg": "3429265a81af9c6862ee2c2e953a1968",
"assets/assets/images/svgs/wallet_charge_fail.svg": "413f34ba79c77f0e5401f69bf8b18393",
"assets/assets/images/svgs/wallet_charge_success.svg": "338d924983bf0261e72943bdbc1217b8",
"assets/assets/images/svgs/wallet_charge_waiting.svg": "0b19033d3f73d461c05fdb3b415ab039",
"assets/assets/images/svgs/wallet_transactions_no_item.svg": "3b974a726d2b10f29eff62d255449c98",
"assets/assets/super_app/customer_club_banner.png": "e8e1753079d747d5c2bef021b1df3fe8",
"assets/assets/super_app/main_slider_test.png": "4af1ec2e1be21188e90b15885fac3e0e",
"assets/assets/super_app/svgs/afrak_main_logo.svg": "0e9b2d4bf9259c6f761a1095df637f2b",
"assets/assets/super_app/svgs/axha_main_logo.svg": "08be8ae312795838ef451ce4d4478db9",
"assets/assets/super_app/svgs/iranexchange_main_logo.svg": "f62f843d5a5e8c530439a8c01d122228",
"assets/assets/super_app/svgs/iranicard_main_logo.svg": "49201e4fa1de683f0d7519717d75d8cf",
"assets/assets/super_app/svgs/paliz_company_main_logo.svg": "fe2b9c5d1654685cd2e81106eb372468",
"assets/assets/super_app/svgs/pateh_main_logo.svg": "4a7d9b87de81e65fc556fa1e949ee02b",
"assets/assets/super_app/svgs/shepa_main_logo.svg": "2532044b811ca1a32f1c01e68e4662bb",
"assets/assets/super_app/svgs/wallet_container.svg": "fb5303d12ff6737c51ca530f66da8ec8",
"assets/assets/super_app/svgs/wallet_container_image.svg": "bce87c782c1a76a3050d9537b19a3737",
"assets/assets/super_app/wallet_container.png": "7962122f3e596a81222bf626212f439d",
"assets/FontManifest.json": "16d78c942fbd7585207cf014864cb89c",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "e4b6357e3d651fab180aa10a49e3937e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-arrow.png": "8efbd753127a917b4dc02bf856d32a47",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-attachment.png": "9c8f255d58a0a4b634009e19d4f182fa",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-delivered.png": "b6b5d85c3270a5cad19b74651d78c507",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-document.png": "e61ec1c2da405db33bff22f774fb8307",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-error.png": "5a59dc97f28a33691ff92d0a128c2b7f",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-seen.png": "10c256cc3c194125f8fffa25de5d6b8a",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-send.png": "2a7d5341fd021e6b75842f6dadb623dd",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-arrow.png": "3ea423a6ae14f8f6cf1e4c39618d3e4b",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-attachment.png": "fcf6bfd600820e85f90a846af94783f4",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-delivered.png": "28f141c87a74838fc20082e9dea44436",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-document.png": "4578cb3d3f316ef952cd2cf52f003df2",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-error.png": "872d7d57b8fff12c1a416867d6c1bc02",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-seen.png": "684348b596f7960e59e95cff5475b2f8",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-send.png": "8e7e62d5bc4a0e37e3f953fb8af23d97",
"assets/packages/flutter_chat_ui/assets/icon-arrow.png": "678ebcc99d8f105210139b30755944d6",
"assets/packages/flutter_chat_ui/assets/icon-attachment.png": "17fc0472816ace725b2411c7e1450cdd",
"assets/packages/flutter_chat_ui/assets/icon-delivered.png": "b064b7cf3e436d196193258848eae910",
"assets/packages/flutter_chat_ui/assets/icon-document.png": "b4477562d9152716c062b6018805d10b",
"assets/packages/flutter_chat_ui/assets/icon-error.png": "4fceef32b6b0fd8782c5298ee463ea56",
"assets/packages/flutter_chat_ui/assets/icon-seen.png": "b9d597e29ff2802fd7e74c5086dfb106",
"assets/packages/flutter_chat_ui/assets/icon-send.png": "34e43bc8840ecb609e14d622569cda6a",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/packages/pateh/android/app/build.gradle": "475952a007f66894f4338c3f177240c5",
"assets/packages/pateh/pateh_assets/fonts/DMSans-Bold.ttf": "b9cec5212f09838534e6215d1f23ed55",
"assets/packages/pateh/pateh_assets/fonts/DMSans-Medium.ttf": "24bfda9719b2ba60b94a0f9412757d10",
"assets/packages/pateh/pateh_assets/fonts/DMSans-Regular.ttf": "7c217bc9433889f55c38ca9d058514d3",
"assets/packages/pateh/pateh_assets/fonts/Estedad-Bold.ttf": "65475ae4ef29769e0b699fffe210c497",
"assets/packages/pateh/pateh_assets/fonts/Estedad-Medium.ttf": "a7b1473e887fb4a9adf676ab5b185093",
"assets/packages/pateh/pateh_assets/fonts/Estedad-Regular.ttf": "8dcf404349d3f5dd9c309aa21b712f71",
"assets/packages/pateh/pateh_assets/fonts/Estedad-SemiBold.ttf": "ff48875b22759e7c115386ab3e0c1e3a",
"assets/packages/pateh/pateh_assets/fonts/icons/Pateh.ttf": "969056b581c1ca692c1d1e2648c7546f",
"assets/packages/pateh/pateh_assets/images/default.png": "9ae1ed52feef50c9f933f1c9a3fbf9c5",
"assets/packages/pateh/pateh_assets/images/svgs/ai_character.svg": "9e6a15e6669b549be3955244f595f736",
"assets/packages/pateh/pateh_assets/images/svgs/ai_star.svg": "b0cfbdd8dac15f4ee3ead2ca70272900",
"assets/packages/pateh/pateh_assets/images/svgs/avatar_ring.svg": "6bfa6cb391e4033faa02f966b769b859",
"assets/packages/pateh/pateh_assets/images/svgs/dark_bus_ticket_success.svg": "9b50106031b8e4f62e82ed69cd87724b",
"assets/packages/pateh/pateh_assets/images/svgs/dark_flight_ticket_success.svg": "1f045a61e4d9e547a0c23845bcf8b70f",
"assets/packages/pateh/pateh_assets/images/svgs/dark_ticket_fail.svg": "33c10165eae8d09670ae539b2d29bf12",
"assets/packages/pateh/pateh_assets/images/svgs/empty_list_passenger.svg": "7f4bf2239f10f01a1643fb517188c2ff",
"assets/packages/pateh/pateh_assets/images/svgs/iranicard.svg": "259f2eb010a8c920f295e88a13272d5f",
"assets/packages/pateh/pateh_assets/images/svgs/light_bus_ticket_success.svg": "6ca22cc141480de9f15db181847d812b",
"assets/packages/pateh/pateh_assets/images/svgs/light_flight_ticket_success.svg": "5e22e17767cc217826705d37c453efdc",
"assets/packages/pateh/pateh_assets/images/svgs/light_ticket_fail.svg": "8e8a8a53d2b51fff9af4fab78c424350",
"assets/packages/pateh/pateh_assets/images/svgs/pateh.svg": "b099e6d84425677b8baea816d00a7f82",
"assets/packages/pateh/pateh_assets/images/svgs/pateh_name.svg": "8e3614363d3a6357d5035f025fea39ab",
"assets/packages/pateh/pateh_assets/images/svgs/profile_avatar.svg": "e97e65d913593d504186453cb3abe39d",
"assets/packages/pateh/pateh_assets/images/weather/clear-day.png": "f8c51965dda5de4b42bf4390e9ff64eb",
"assets/packages/pateh/pateh_assets/images/weather/clear-night.png": "3810d1191230f994f0a290b63dcd86f6",
"assets/packages/pateh/pateh_assets/images/weather/cloudy.png": "8ea16a0c352cbd7ee2e955c6876516a1",
"assets/packages/pateh/pateh_assets/images/weather/fog.png": "8e9a34b77b1981704b7134cabf86b1fe",
"assets/packages/pateh/pateh_assets/images/weather/hail.png": "2cde678a2c491952d9e3f3ee6bbec352",
"assets/packages/pateh/pateh_assets/images/weather/partly-cloudy-day.png": "e7d2f4d5b9c1676e352f162cccdf7ad3",
"assets/packages/pateh/pateh_assets/images/weather/partly-cloudy-night.png": "ba5a87c369b4bb53f5f27eca521461ab",
"assets/packages/pateh/pateh_assets/images/weather/rain-snow-showers-day.png": "190379c73737bbb06bc4041d62628908",
"assets/packages/pateh/pateh_assets/images/weather/rain-snow-showers-night.png": "946cbf528d4a6a24b1459398def8c75d",
"assets/packages/pateh/pateh_assets/images/weather/rain-snow.png": "bd0328efdc861c6153e004e8c751a4f9",
"assets/packages/pateh/pateh_assets/images/weather/rain.png": "9e06de898b60daaec69e8a6aaef67aba",
"assets/packages/pateh/pateh_assets/images/weather/showers-day.png": "a0f681956aca495c0076bae080d0029e",
"assets/packages/pateh/pateh_assets/images/weather/showers-night.png": "c8be175a538c31f44c547a83c3777221",
"assets/packages/pateh/pateh_assets/images/weather/sleet.png": "5d8c6b2541de541e06a29ebaf755a116",
"assets/packages/pateh/pateh_assets/images/weather/snow-showers-day.png": "6574e3ac9ecc96b32c97db44c58c6efa",
"assets/packages/pateh/pateh_assets/images/weather/snow-showers-night.png": "cd8f126cf6f4db11308b6c267a750565",
"assets/packages/pateh/pateh_assets/images/weather/snow.png": "a1416d7d2dc3f748a596295a9d10c1b2",
"assets/packages/pateh/pateh_assets/images/weather/thunder-rain.png": "7c8c803f176b0d09ce6453194b3922f2",
"assets/packages/pateh/pateh_assets/images/weather/thunder-showers-day.png": "524eb0e59e01e641b43413da38ec71c7",
"assets/packages/pateh/pateh_assets/images/weather/thunder-showers-night.png": "c6d0f49366b1d17553d52f5a43adae74",
"assets/packages/pateh/pateh_assets/images/weather/thunder.png": "e7ab8abd6d11fa25360f1dce5ada5e70",
"assets/packages/pateh/pateh_assets/images/weather/wind.png": "a01fa76412f2c917fca5da61327adc2c",
"assets/packages/pateh/pubspec.yaml": "35561a0e3abac83edde51431a3b0fbe1",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/pateh_assets/fonts/icons/Pateh.ttf": "969056b581c1ca692c1d1e2648c7546f",
"assets/pateh_assets/images/airline_icons/0V.png": "38d9ebecc4b2202806bd1d1e5c2597fe",
"assets/pateh_assets/images/airline_icons/a0.png": "7724efcf13cf72ea063e0a4a12f35e9a",
"assets/pateh_assets/images/airline_icons/A1.png": "15d3229f48081c031d7952c6ef75ef16",
"assets/pateh_assets/images/airline_icons/AccessRail.png": "25b146fb0e9ca116f76d4a248c4bd431",
"assets/pateh_assets/images/airline_icons/AegeanAirlines(A3).png": "257566a4b2780557425a6930b72e00bd",
"assets/pateh_assets/images/airline_icons/AerLingus.png": "88db314e1027c0697cbfd9b71edd6559",
"assets/pateh_assets/images/airline_icons/Aerocuahonte.png": "2efd21ecc732a292fc312e1321c8e4d1",
"assets/pateh_assets/images/airline_icons/AeroflotRussianAirlines(SU).png": "84378411631d7868abee2a82624e2bc7",
"assets/pateh_assets/images/airline_icons/AerolineasGalapagos.png": "1a17e69e068a5323853611e525e4dc42",
"assets/pateh_assets/images/airline_icons/Aerolitoral.png": "66591509c964d63383ac4527b139fbd8",
"assets/pateh_assets/images/airline_icons/AeroTransporte.png": "1de1311ec40bd6405222302af80e28a3",
"assets/pateh_assets/images/airline_icons/AfricaWorldAirlines.png": "e265fd3bbe8cc7924c0ef6d51ea8d54a",
"assets/pateh_assets/images/airline_icons/AirAlgerie.png": "e3b58658fdea0b6a6269d729bde0e8f9",
"assets/pateh_assets/images/airline_icons/AirAntillesExpress.png": "77f252cde2cf3c10e18832d9e761c2e2",
"assets/pateh_assets/images/airline_icons/AirArabia.png": "f296f123b171fff82cbb866e7098d27c",
"assets/pateh_assets/images/airline_icons/AirArabiaMaroc.png": "f296f123b171fff82cbb866e7098d27c",
"assets/pateh_assets/images/airline_icons/AirArmenia(QN).png": "16355e987e237c0331b9ea8d079bdea8",
"assets/pateh_assets/images/airline_icons/AirAstana.png": "ef7e2dfd992c2a2b201e2376304108f3",
"assets/pateh_assets/images/airline_icons/AirBaltic.png": "6978a08273346b0ecc183c307d8c0fb0",
"assets/pateh_assets/images/airline_icons/AirBerlin.png": "c5308ab92a8bfddbbff2c4aab332bcd2",
"assets/pateh_assets/images/airline_icons/AirBurkina.png": "57d3dabbbf547f6ce2bf109932c63314",
"assets/pateh_assets/images/airline_icons/AirCanada(AC).png": "8f8d1cd2d4194125eec4aff447e90223",
"assets/pateh_assets/images/airline_icons/AirCanadaJazz.png": "3760a4cda1f6574e77eab9983be15359",
"assets/pateh_assets/images/airline_icons/AirCanadaRouge.png": "07049cfc821c84d6ac6e00bef85ae3f6",
"assets/pateh_assets/images/airline_icons/AirCargoGermany.png": "dfa9f6aa8105e6569325e5c9acc766fc",
"assets/pateh_assets/images/airline_icons/AirCarnival.png": "eee2b68ddac067e45cbe90fc580c9d3b",
"assets/pateh_assets/images/airline_icons/AirChathams.png": "d4acc440f1952ef622408974780030a8",
"assets/pateh_assets/images/airline_icons/AirChina.png": "83921f6b7af37e388794776b23643c47",
"assets/pateh_assets/images/airline_icons/AIRDO.png": "890351ce20462ebd3befdbfa844680c7",
"assets/pateh_assets/images/airline_icons/AirDolomiti.png": "ecc738db36f9e26f421132d72c7d98f0",
"assets/pateh_assets/images/airline_icons/AirEuropa(UX).png": "e480ab31e80f127dff8e5746d95eb443",
"assets/pateh_assets/images/airline_icons/AirFrance(AF).png": "99c9203d427d0ce6931dc5915be1c78d",
"assets/pateh_assets/images/airline_icons/AirGeorgia.jpeg": "b711b8fa5115b08bcb3cd0e336b23ad1",
"assets/pateh_assets/images/airline_icons/AirIndiaLimited.png": "9fb2538dce06f0c31f04c2164934fa94",
"assets/pateh_assets/images/airline_icons/AirMalawi.png": "166316002df6cdfa97ca7f1fa0858a08",
"assets/pateh_assets/images/airline_icons/AirMarshallIslands.png": "08c856737aa8813dbaca117ad9b01a25",
"assets/pateh_assets/images/airline_icons/AirNorthCharterCanada.png": "e057687032a743d5533a52b71970c021",
"assets/pateh_assets/images/airline_icons/AirphillExpress.png": "5f682e14c738539446f598041fd6841f",
"assets/pateh_assets/images/airline_icons/AirSerbia(JU).png": "79eebe17f9c6b53beee3c463c800673a",
"assets/pateh_assets/images/airline_icons/AirSinai.png": "6110d9b2877a8d6e120b5a6143923011",
"assets/pateh_assets/images/airline_icons/AirTahitiNui.png": "59bf997238d71637d4fcb776767aa5a6",
"assets/pateh_assets/images/airline_icons/AirUrga.png": "ac1d1349322a4b2de3590bfc8b1540c3",
"assets/pateh_assets/images/airline_icons/ais.jpeg": "32ea6b84c5b05910ccfe7085027ea625",
"assets/pateh_assets/images/airline_icons/AlaskaAirlines(AS).png": "cb473a021668e9b05874b24bdc6d06b7",
"assets/pateh_assets/images/airline_icons/Alitalia(AZ).png": "4116047043fe5653c75f50568ad7fe9f",
"assets/pateh_assets/images/airline_icons/Alliance.png": "48bc4cc15b1cc1154095fdea60af132b",
"assets/pateh_assets/images/airline_icons/AllNipponAirways.png": "b9fa951bcdf6bb840e20350f83d01c61",
"assets/pateh_assets/images/airline_icons/AlpineAirExpress.png": "6a4be9eb5c08ff9f897bd9c082b6c4fc",
"assets/pateh_assets/images/airline_icons/Alsie.png": "748009207294b78e0f8256f19416d435",
"assets/pateh_assets/images/airline_icons/AmericanAirlines.png": "0aa65e4d95b399b81fdc76781c1a49b5",
"assets/pateh_assets/images/airline_icons/Amtrak.png": "e475ce8b719c79f5c56bce91e5b09a1a",
"assets/pateh_assets/images/airline_icons/AnadoluJet(AJTK).png": "80cd330615f4e9840618a37f1a8c5100",
"assets/pateh_assets/images/airline_icons/AnaWings.png": "e080e34bab837c4be8e2423283124a0a",
"assets/pateh_assets/images/airline_icons/AnsettAustralia.png": "e057737dbb44c43bbc1d290b1d993d3e",
"assets/pateh_assets/images/airline_icons/ApexAirline.png": "258ea8ead9dba82067a01f8403c034ed",
"assets/pateh_assets/images/airline_icons/ArmeniaAirways(6A).png": "7a315a6027824cb4989c89e890930bc6",
"assets/pateh_assets/images/airline_icons/aseman.png": "93cac6e9c22644aa6b679d0eb45b3348",
"assets/pateh_assets/images/airline_icons/AsemanAirlinesLogo.png": "b2748cc290a0ee7a4be7296bffdc35a2",
"assets/pateh_assets/images/airline_icons/AsianaAirlines.png": "98995593b87b3f0b15817668dcce4835",
"assets/pateh_assets/images/airline_icons/AsianAir.jpeg": "b6be9c2d37ed4b1a7d442d385582d61f",
"assets/pateh_assets/images/airline_icons/ata.png": "286f80f97c7c7f2b7a012d7c92d7ddd4",
"assets/pateh_assets/images/airline_icons/ATAAirlinesLogo.png": "700f8b48691f40a42ba9d80399e51148",
"assets/pateh_assets/images/airline_icons/AtlantisEuropeanAirways.png": "ce9e1cf9d94d8782e62dbefa07cf84dd",
"assets/pateh_assets/images/airline_icons/Atlas.png": "6f756178785ef1d1b69c5a30d2c0791e",
"assets/pateh_assets/images/airline_icons/AtlasGlobal(KK).png": "ccdaafa246a234583acda2a6f832c808",
"assets/pateh_assets/images/airline_icons/AtlasjetUkraine.png": "4ead6d7a8b489190a515083cd0f03275",
"assets/pateh_assets/images/airline_icons/atr150-150.png": "45357b864948651ae11597e25a83ac13",
"assets/pateh_assets/images/airline_icons/atrak.png": "ade7f8f6eeda209f543456676cecd103",
"assets/pateh_assets/images/airline_icons/AtrakAirLogo.png": "aca1e7f5767b60074e93e9e24d60fa02",
"assets/pateh_assets/images/airline_icons/Austral.png": "5c3e60a0afc6136346ac95e16a25684b",
"assets/pateh_assets/images/airline_icons/AustralianAirlines.jpeg": "8d65a48c8725da3f8dc82c42f76de165",
"assets/pateh_assets/images/airline_icons/AustrianAirlines(OS).png": "db895d06e1fe9f259965d8ecc21f5ae4",
"assets/pateh_assets/images/airline_icons/ava-airline.png": "8747b1c355612622e57f495e0a7b0ea1",
"assets/pateh_assets/images/airline_icons/Avanza.png": "04f30d6db5d0f4c3b8653e8271251b81",
"assets/pateh_assets/images/airline_icons/AviorRegional.png": "47147d071e38e03bb830542637085d90",
"assets/pateh_assets/images/airline_icons/AzerbaijanAirlines(J2).png": "c47efdd31bacae944a4944fefd565c38",
"assets/pateh_assets/images/airline_icons/AZIMUTH.png": "60599ee853beddcb375bc6c7f50ffdee",
"assets/pateh_assets/images/airline_icons/Bahamasair.png": "2eee3bfe20a48253029ac1780763f6d6",
"assets/pateh_assets/images/airline_icons/Bamboo.png": "187d7e99e86e5489ca451307c47026f3",
"assets/pateh_assets/images/airline_icons/BeninGolfAir.png": "87726e7184e6d3b5618263f9241f0126",
"assets/pateh_assets/images/airline_icons/BimanBangladesh.png": "7ce630aea5903c646648f47081e7fe4c",
"assets/pateh_assets/images/airline_icons/BlueBird.png": "2d6c690222b7e4607e66e35ed07d89c7",
"assets/pateh_assets/images/airline_icons/BritishAirways(BA).png": "39bf0ea8d59a0310816ec854e0100263",
"assets/pateh_assets/images/airline_icons/BrusselsAirlines.png": "2244698ab41004b1ad882c9050b2d36e",
"assets/pateh_assets/images/airline_icons/BulgariaAir(FB).png": "04c4ac716a6990b3cb5518bc7e6f9da3",
"assets/pateh_assets/images/airline_icons/Busan.png": "9845d0b636001ca7d25546fcfc3f32ed",
"assets/pateh_assets/images/airline_icons/CanadianNorth.png": "eeb3bfc2e5d3bb94953dd6fac820bacc",
"assets/pateh_assets/images/airline_icons/caspian.png": "da8a47c499a2dfac7edfa43bdb9db3c9",
"assets/pateh_assets/images/airline_icons/CaspianAirlineLogo.png": "3e82087857d21d52eced1afc72bf99fa",
"assets/pateh_assets/images/airline_icons/CathayPacific(CX).png": "43a046e611515e74d84122fca86b9c9c",
"assets/pateh_assets/images/airline_icons/CebuPacific.png": "a377a4968f0a014078e613c99e723a3e",
"assets/pateh_assets/images/airline_icons/Cemair.png": "ed898282dbd78600bc6d48a5215cb73f",
"assets/pateh_assets/images/airline_icons/chabahar.png": "49495db8982fd7397164ea3813de6fdf",
"assets/pateh_assets/images/airline_icons/ChamWings.png": "c489782569c2088e9c89ef947943aa67",
"assets/pateh_assets/images/airline_icons/ChinaAirlines.jpeg": "8177ce09abb0458193fb89e37b1376bc",
"assets/pateh_assets/images/airline_icons/ChinaCargoAirlines.jpeg": "6ef5bd68499d5dffce0d8e187ceabf14",
"assets/pateh_assets/images/airline_icons/ChinaEasternAirlines.png": "233e91c56946c58f3f300a6071cf5e1e",
"assets/pateh_assets/images/airline_icons/ChinaSouthernAirlines(CZ).png": "8e6b5fb4a60d6b267604b9f395c3c378",
"assets/pateh_assets/images/airline_icons/ChinaUnitedAirlines.png": "281df5b2821323e006f1dc050a92fbec",
"assets/pateh_assets/images/airline_icons/Cirrus.png": "d9f6e9e09fa35b4276b6db7dd4ce5fcb",
"assets/pateh_assets/images/airline_icons/City.png": "b48b907b941b3b32afc6cd67107ec051",
"assets/pateh_assets/images/airline_icons/CityJet.png": "49f3991c008253cc4f9f278d2805a27e",
"assets/pateh_assets/images/airline_icons/cpn150-150.png": "40f43a87ea559cf783477c1eb07e6ac9",
"assets/pateh_assets/images/airline_icons/Cubana.png": "80e95e20b87ffa5e35cb695a8261355a",
"assets/pateh_assets/images/airline_icons/Cyprus.png": "b61791f530918bc443f85315e5046183",
"assets/pateh_assets/images/airline_icons/CzechAirlines.png": "901e231d676a22e85274bc2833556351",
"assets/pateh_assets/images/airline_icons/default.jpg": "e80c16244a94aed42ac8f775ec79ec4c",
"assets/pateh_assets/images/airline_icons/default.png": "9ae1ed52feef50c9f933f1c9a3fbf9c5",
"assets/pateh_assets/images/airline_icons/DeltaAirLines.png": "f42cd88d3f44d78e45f8b10e4c5986f7",
"assets/pateh_assets/images/airline_icons/EasternAirways.png": "d9d21abbadfa5db20c5bf47edb14d4a1",
"assets/pateh_assets/images/airline_icons/Eastland.png": "48e45284b812ec601af7c6e046a59342",
"assets/pateh_assets/images/airline_icons/easyJet.png": "4d2812789d090ebf1cfc7a7306384106",
"assets/pateh_assets/images/airline_icons/easyJetSwitzerland.png": "c2861ed1834b2b23de840fc5ea1dab01",
"assets/pateh_assets/images/airline_icons/Egyptair.png": "a4dffa74acf764123d53da8273c4db4b",
"assets/pateh_assets/images/airline_icons/Emirates(EK).png": "92076cdd1254207cda691fb5bc1e62e0",
"assets/pateh_assets/images/airline_icons/Empire.png": "1089d22f4225dc065afbeae73f92627c",
"assets/pateh_assets/images/airline_icons/eramair.png": "854e9b73cc7222d0bed9f76ae62e4c72",
"assets/pateh_assets/images/airline_icons/EramAirLogo.png": "f036bb545778ddcd2433f7afba72f466",
"assets/pateh_assets/images/airline_icons/EthiopianAirlines.png": "25de749ce5e4ca165651da276811a147",
"assets/pateh_assets/images/airline_icons/EtihadAirways(EY).png": "11ab065c3e5e5492f6400cf0dfbc4f6b",
"assets/pateh_assets/images/airline_icons/Eurowings.png": "b3b94d98e7ae07073b71ae9e98ed00bc",
"assets/pateh_assets/images/airline_icons/EVAAir.png": "e79ec55ada0434e66d0f5d1ab958f028",
"assets/pateh_assets/images/airline_icons/Everts.png": "b40d33f452bec50ce6c188e2e387072c",
"assets/pateh_assets/images/airline_icons/farsairqeshm.png": "66a5b438f12c6018e9f47b73137b0d93",
"assets/pateh_assets/images/airline_icons/FarsAirQeshmLogo.png": "7fd53f995e646cf6362d017542809a31",
"assets/pateh_assets/images/airline_icons/Finnair.png": "fdc25eaa3ada640ad2501764448b71d3",
"assets/pateh_assets/images/airline_icons/Flybe.png": "75414eb6b2e704067d746cc6173076f1",
"assets/pateh_assets/images/airline_icons/FlyDubai(FZ).png": "368bb8f6ce9c6e34d8606d75dad01b64",
"assets/pateh_assets/images/airline_icons/FlyMeSweden.png": "8c6542b61d90468af2fcd6987497ef89",
"assets/pateh_assets/images/airline_icons/Flynas.png": "e1ae7eadc00f440525b644f22a86dac4",
"assets/pateh_assets/images/airline_icons/FlyOne.png": "50a2829b768e23b106406efb00d807b6",
"assets/pateh_assets/images/airline_icons/flypersia.png": "530a2b8f35e32caba5b9a20d1a6ea4b3",
"assets/pateh_assets/images/airline_icons/FlyPersiaLogo.png": "6b2902a27530a463b37bf3fd0661b94c",
"assets/pateh_assets/images/airline_icons/FlySalone.png": "c033a2c93556454d609a7c3f4f375d12",
"assets/pateh_assets/images/airline_icons/fpi150-150.png": "cc7d3dab8c94bf7b4d5a23036dd6355f",
"assets/pateh_assets/images/airline_icons/FrenchBee.png": "2bb1ff1d49d9065c527b1fdd4896bd07",
"assets/pateh_assets/images/airline_icons/GambiaBirdAirlines.png": "50387a87df2e2286bf91cab32eed4274",
"assets/pateh_assets/images/airline_icons/GeorgianAirways.png": "4a89922a7d1f67278aea80d5e7377a25",
"assets/pateh_assets/images/airline_icons/Germania.png": "d481a4d438354f5173becceaee5a7fb7",
"assets/pateh_assets/images/airline_icons/Germanwings.png": "053a0719b385e8c48eb9a00af0ba1293",
"assets/pateh_assets/images/airline_icons/Golden.png": "468ca2dd1c8c11a6439308df0198c6a8",
"assets/pateh_assets/images/airline_icons/GrandChina.png": "ab94f242455e14cc1cd1417c835a6bc8",
"assets/pateh_assets/images/airline_icons/GulfAir(GF).png": "c61249cd233e53650ebcfb2ec8db9f70",
"assets/pateh_assets/images/airline_icons/Hainan.png": "9ed8398a66be43c404a893444c786625",
"assets/pateh_assets/images/airline_icons/HaitiAmbassadorAirlines.png": "166a19140c65e1640e34d83aabddd814",
"assets/pateh_assets/images/airline_icons/header__logo.png": "f559cce02f73b2bec651288a96844192",
"assets/pateh_assets/images/airline_icons/HelveticAirways.png": "c864935952f02b457a1f15296afbaa9e",
"assets/pateh_assets/images/airline_icons/HiFly.png": "f9f02785a5855ed5a637ec5d773c1384",
"assets/pateh_assets/images/airline_icons/HongKongAirlines.png": "c48986e866eabae74527193ab9f245b1",
"assets/pateh_assets/images/airline_icons/HongKongExpressAirways.png": "2c8ef7bb42529e2863aea466380202e1",
"assets/pateh_assets/images/airline_icons/hop.png": "025751fcfe87b539ddfa424151b775fb",
"assets/pateh_assets/images/airline_icons/Horizon.jpeg": "78718582a504e9eb1652f0fd1ab76971",
"assets/pateh_assets/images/airline_icons/IberiaAirlines.png": "7dcf15485632f08731e9acbd2fb0b71a",
"assets/pateh_assets/images/airline_icons/Icelandair.png": "8bc40a02132c10f46c75e31f5f5f7da5",
"assets/pateh_assets/images/airline_icons/IndiGo.png": "80ef55fda046ba0ac5208c35a0d3dbf7",
"assets/pateh_assets/images/airline_icons/InterairSouthAfrica.png": "7e5198e37faaba19b1432a5c73e1af17",
"assets/pateh_assets/images/airline_icons/Interjet.png": "54b034707182e5f8573981691c27a0d9",
"assets/pateh_assets/images/airline_icons/intersky.jpeg": "1b55aafedac36c54f9df0e35a5a8fbc9",
"assets/pateh_assets/images/airline_icons/ira150-150.png": "a09f8849e2e67c37413b8f6a02834de7",
"assets/pateh_assets/images/airline_icons/iranair.png": "62c78606a90f25c91874afbe9475b46b",
"assets/pateh_assets/images/airline_icons/IranAirLogo.png": "07af187e0af722e9eb3b67eaac61422b",
"assets/pateh_assets/images/airline_icons/iranairtour.png": "6100f90e3d8c880c339a0516a570e22f",
"assets/pateh_assets/images/airline_icons/IranAirtourLogo.png": "b12f693ea73b96bea5d02c0605bfd79c",
"assets/pateh_assets/images/airline_icons/Iraqi-Airways.png": "4bb271cd4297401439e6c450e061767d",
"assets/pateh_assets/images/airline_icons/irb150-150.png": "82a1f4005158034c1f360a7a5d882e1a",
"assets/pateh_assets/images/airline_icons/irc150-150.png": "b8b5e113647b2ccc98b905a6ceb457df",
"assets/pateh_assets/images/airline_icons/irm150-150.png": "90a1131b1623e999096ae35e1eed0072",
"assets/pateh_assets/images/airline_icons/irp150-150.png": "dca12b104b23f7aaaa4d1291dce30302",
"assets/pateh_assets/images/airline_icons/irs150-150.png": "235feacd74b85f16aeb450f967302d53",
"assets/pateh_assets/images/airline_icons/IRU.gif": "b986643db10ee4a62da5a7d7b2b10f8f",
"assets/pateh_assets/images/airline_icons/IRU.png": "b84ea0db31143fde341fd57ff24a941e",
"assets/pateh_assets/images/airline_icons/iru150-150.png": "af9591a270260af19dbc25fdde7354f2",
"assets/pateh_assets/images/airline_icons/irz150-150.png": "54713c7c01aa492a413b07ea265d6951",
"assets/pateh_assets/images/airline_icons/izo150-150.png": "a8eb2699defea28d1c38b1368befb3eb",
"assets/pateh_assets/images/airline_icons/JapanAirlines.png": "989b998f81d4f89cd93360a2401f58d6",
"assets/pateh_assets/images/airline_icons/Jet2.png": "b0f29a880f752c7064ea900455c537b3",
"assets/pateh_assets/images/airline_icons/JetAirways.png": "d4acc49db98fa95cea998996d39caabb",
"assets/pateh_assets/images/airline_icons/JetBlueAirways.png": "cea2f2fa2d6a0b1793119d9f38c46e04",
"assets/pateh_assets/images/airline_icons/Jetclub.png": "1ec6fd0a49ff7f4ec30af6ab2f224e24",
"assets/pateh_assets/images/airline_icons/JubbaAirways.png": "9217c70c1f0c6ba53cf477a5bd8b07b9",
"assets/pateh_assets/images/airline_icons/Juneyao.png": "e38bb77973e5bc978757b49bb030c009",
"assets/pateh_assets/images/airline_icons/karun.png": "08835ea44e731cf7cf83bf359d03a991",
"assets/pateh_assets/images/airline_icons/KarunAirLogo.png": "f0109f7691823737e4d7f46e43b52bdf",
"assets/pateh_assets/images/airline_icons/KC.png": "95d58ef910d14830c65feaab75ef15a6",
"assets/pateh_assets/images/airline_icons/KennBorekAir.png": "0caf92c8d21e210c60f23c8d31a2a065",
"assets/pateh_assets/images/airline_icons/kis150-150.png": "e373d11e254bdc489e9ae689a093a471",
"assets/pateh_assets/images/airline_icons/kishair.png": "ff4c12e6277093f2ebbc7b8088bd1c84",
"assets/pateh_assets/images/airline_icons/KishAirLogo.png": "24e337f41566c15d8c82155a37c1f02c",
"assets/pateh_assets/images/airline_icons/KLM(KL).png": "a9096931907423842ee87dad24f7c5bb",
"assets/pateh_assets/images/airline_icons/KoreanAir.png": "cf25787c8c86569efce9e784736d65f9",
"assets/pateh_assets/images/airline_icons/KuwaitAirways(KU).png": "8c383a618a2857a7caeb76cdc726ae71",
"assets/pateh_assets/images/airline_icons/KyrgyzTransAvia.png": "f7b87deaa4f9f94573b7fd5c6338b434",
"assets/pateh_assets/images/airline_icons/LatamAirlinesArgentina.png": "1fce1bcf3f6ddfc9aaea92b1e063c0c6",
"assets/pateh_assets/images/airline_icons/LatamAirlinesColombia.png": "e9e40f9587ce6090dd31e20c51c729dc",
"assets/pateh_assets/images/airline_icons/Laudamotion.png": "4d493588252af78a6b075b8c1e4ac4a4",
"assets/pateh_assets/images/airline_icons/lh.png": "ae67cea071d13e389cf783b43067e509",
"assets/pateh_assets/images/airline_icons/LOTPolishAirlines.png": "f3069bae599dcdc6967f649576b880a0",
"assets/pateh_assets/images/airline_icons/Lufthansa(LH).png": "6fc7f07a81b9294eee1d8cd03e849d33",
"assets/pateh_assets/images/airline_icons/LufthansaCityLine.png": "0e56a341fca737de121b26e773855e44",
"assets/pateh_assets/images/airline_icons/Luxair.png": "1bac3b3e9b616ccb8ef543e00470f01d",
"assets/pateh_assets/images/airline_icons/mahan.png": "5c841370dfbb05e66b9d9fbbcf8aa85d",
"assets/pateh_assets/images/airline_icons/MahanAirLogo.png": "4280f22375f141ce242041f2406a8c9b",
"assets/pateh_assets/images/airline_icons/MalawianAirlines.png": "aaf5ab3d369fe673af6501c938ce5625",
"assets/pateh_assets/images/airline_icons/MalaysiaAirlines.png": "4e59281d9f438c393f97c23768cb81d0",
"assets/pateh_assets/images/airline_icons/Malta.png": "6470145f0f8d5b767452cdba4df98c0d",
"assets/pateh_assets/images/airline_icons/Mandarin.png": "c50802912c6218ceeeb6c8754c848e86",
"assets/pateh_assets/images/airline_icons/meraj.png": "ed4bcb28f63b428f387b0c538a205ba5",
"assets/pateh_assets/images/airline_icons/MerajAirlineLogo.png": "580aa28dcad1ad32a7cc7ce44fb5ce4f",
"assets/pateh_assets/images/airline_icons/MIATMongolianAirlines.png": "d871b0f3a5e1412b2d901b7d7ef80947",
"assets/pateh_assets/images/airline_icons/MiddleEastAirlines.png": "0b330e5b8ad13a3158a20bf1bd8bd98e",
"assets/pateh_assets/images/airline_icons/Mirny.png": "4b7c8d8a5e8b41439abcc0e8493bedf7",
"assets/pateh_assets/images/airline_icons/MoldavianAirlines.png": "3396486c7f8e3675ac23fc357f8c51aa",
"assets/pateh_assets/images/airline_icons/Monarch.png": "f43083809d702a5fe20d63f05f38b43f",
"assets/pateh_assets/images/airline_icons/MontserratAirways.png": "4ca02764d1dce158bdde527191f63e53",
"assets/pateh_assets/images/airline_icons/mrj150-150.png": "1c7e801b1afde9ea0c73b0898d7efdbc",
"assets/pateh_assets/images/airline_icons/MyanmarNationalAirlines.png": "db89002f2751a1628ff90424098a8b63",
"assets/pateh_assets/images/airline_icons/Namibia.png": "6aea861bfe70aa8f72b54447d10e6aba",
"assets/pateh_assets/images/airline_icons/NationalAirlines.png": "14fee5302fc043e08243f80fe5711d9d",
"assets/pateh_assets/images/airline_icons/NatureAir.png": "fe3e584dcf63d4ea6b7a5634e786f366",
"assets/pateh_assets/images/airline_icons/NewEnglandAirlines.jpeg": "95f895d3f1a67cf97d7dfc1f45c49084",
"assets/pateh_assets/images/airline_icons/NextJet.png": "721e76b224a74d24931f627586f03b29",
"assets/pateh_assets/images/airline_icons/Niger.png": "87a7b672142b11a8aa868a472d053db1",
"assets/pateh_assets/images/airline_icons/Nordavia.png": "bb76576ea4407ee813a40ddabb6da5c7",
"assets/pateh_assets/images/airline_icons/Northwestern.png": "f48a4294af44c4d6df6e94aeb477a865",
"assets/pateh_assets/images/airline_icons/NorwegianAir.png": "23bba98e72d3e9399fbca7267d378282",
"assets/pateh_assets/images/airline_icons/NouvelAirTunisie.png": "f43c9f7c628bd96426c55538f3206622",
"assets/pateh_assets/images/airline_icons/OmanAir(WY).png": "657c41016a40b748de4a7cb2035f657a",
"assets/pateh_assets/images/airline_icons/PacificAirlines.png": "659166366f764d2b996a342a853e83b2",
"assets/pateh_assets/images/airline_icons/Pakistan.png": "267db79a7902221bb40279df55a0a6f8",
"assets/pateh_assets/images/airline_icons/pars.png": "33776e3b2995092aa2bbc163dc91f830",
"assets/pateh_assets/images/airline_icons/ParsAirlineLogo.png": "1b8f4571de0757e027fc1b6bedad7f22",
"assets/pateh_assets/images/airline_icons/PassaredoTransportesAereos.png": "e9c3c6d102e8a607122d8bdc431579e1",
"assets/pateh_assets/images/airline_icons/payam.png": "572dd3b2a2b5362b7f7b3d3d6fdb6e51",
"assets/pateh_assets/images/airline_icons/PegasusAirlines(PC).png": "f4213d8138fcc7f8b2cbd7495f0e354e",
"assets/pateh_assets/images/airline_icons/Pobeda.png": "91912511662634c34f1e1cb94ccdbcae",
"assets/pateh_assets/images/airline_icons/pouya.png": "7363a6554e657a2afc01f5b0d35b11a5",
"assets/pateh_assets/images/airline_icons/PouyaAirLogo.png": "966c6447b8174a05e69fe7abb7dd9044",
"assets/pateh_assets/images/airline_icons/QatarAirways(QR).png": "77f398623aef3658a08308a169d9e273",
"assets/pateh_assets/images/airline_icons/qeshmair.png": "766bdef5cc8877feb59175a8eea43a5c",
"assets/pateh_assets/images/airline_icons/QeshmAirLogo.png": "f5d5dc05fb9f249704ec53858d4af4d1",
"assets/pateh_assets/images/airline_icons/qfz150-150.png": "2ff9f65921e2462d177855a4886bfe08",
"assets/pateh_assets/images/airline_icons/qsm150-150.png": "aa957f32c7f79c372adc649f09092203",
"assets/pateh_assets/images/airline_icons/RoyalAirMaroc(AT).png": "feeeb5c6de29e2e74f16184bd5a8052d",
"assets/pateh_assets/images/airline_icons/RoyalBruneiAirlines.png": "ae0a67c1942035ea69eb154d2beaae0a",
"assets/pateh_assets/images/airline_icons/RoyalJordanian.png": "e5bc7e70f32d0ec5dc8923cf73f77d1c",
"assets/pateh_assets/images/airline_icons/Ryanair.png": "c4ee796849f5990bd2253b272c8ed84e",
"assets/pateh_assets/images/airline_icons/s7.png": "f7073dd55158a59c7526a297ed478693",
"assets/pateh_assets/images/airline_icons/safiran.png": "c35bdc44972c131792a42ef04a562dd2",
"assets/pateh_assets/images/airline_icons/saha.png": "566faff3525796e7655b374607939c65",
"assets/pateh_assets/images/airline_icons/SahaAirlineLogo.png": "969d984afb02f3315988692835a58780",
"assets/pateh_assets/images/airline_icons/sahand.png": "a42ef45ebf7bac5f69f74145057712e5",
"assets/pateh_assets/images/airline_icons/salamair.png": "70a5b341a92f411597cf14944e1286a7",
"assets/pateh_assets/images/airline_icons/Saratov.png": "13f21e9f1c1e02fe705d14b1ed2e4891",
"assets/pateh_assets/images/airline_icons/SaudiArabianAirlines.png": "fcec30fd41be6a4785942edde8ee250a",
"assets/pateh_assets/images/airline_icons/SaudiGulfAirlines.png": "c007cbba506993896c8a2e44c3ffde2c",
"assets/pateh_assets/images/airline_icons/sbt150-150.png": "e2d70a9350411ed86d3e92884255e3fd",
"assets/pateh_assets/images/airline_icons/ScandinavianAirlines.png": "4168509b91d390293274512bcd891908",
"assets/pateh_assets/images/airline_icons/sepahan.png": "84854f5cd0e13de87a45f1de4d39cf67",
"assets/pateh_assets/images/airline_icons/sepehran.png": "51c3e59205937aa09c0223bcbb0a6781",
"assets/pateh_assets/images/airline_icons/SepehranAirlineLogo.png": "b8ebd941326b27e8cd2487c6a57b7476",
"assets/pateh_assets/images/airline_icons/sfn150-150.png": "30550e23f74c07a21995e04baf664195",
"assets/pateh_assets/images/airline_icons/Shandong.png": "e2a881282864e5c462135ffcfbe010fc",
"assets/pateh_assets/images/airline_icons/ShanghaiAirlines.png": "6731a3e00fb9de95086ac60c51b2b906",
"assets/pateh_assets/images/airline_icons/ShenzhenAirlines.png": "f68565a2d4a5e34c4f88d149cd01711a",
"assets/pateh_assets/images/airline_icons/shi150-150.png": "8f4487750e7c6fa766a14bce122aec2f",
"assets/pateh_assets/images/airline_icons/Sichuan.png": "1256d06471a88871b5720a6ac3f91974",
"assets/pateh_assets/images/airline_icons/SingaporeAirlines(SQ).png": "1cfab62c21ed76ca7756467be331ab09",
"assets/pateh_assets/images/airline_icons/SJT.jpeg": "d14e0353f8ce26f1fa10e98e9ead88e2",
"assets/pateh_assets/images/airline_icons/SkynetAirlines.png": "979d9d530824e3d2a8ebac7106d00c06",
"assets/pateh_assets/images/airline_icons/SkytransRegional.png": "430589e0168221612c116f9bd5967d17",
"assets/pateh_assets/images/airline_icons/SkyworkAirlines.png": "1e87c8bdad8f408e680c6d2e31610393",
"assets/pateh_assets/images/airline_icons/Smartlynx.png": "58d9c84defaa75d6ff0e581ae35460f5",
"assets/pateh_assets/images/airline_icons/Solaseed.png": "32e036559416769ac6a0b86713b32c12",
"assets/pateh_assets/images/airline_icons/SpeedAllianceWestbahn.png": "abfe2ff2b51d9b3ffb30db561fbaf96a",
"assets/pateh_assets/images/airline_icons/Spirit.png": "1f2dc7a2596c5b97012a70317410a8ab",
"assets/pateh_assets/images/airline_icons/spn150-150.png": "f417b50a00f7095a422b150ba4e446fd",
"assets/pateh_assets/images/airline_icons/StarAirways.png": "8cb7fc724dce78e04e55747fa6fc99d6",
"assets/pateh_assets/images/airline_icons/Sudan.png": "36ca84629353031efc4ea6a9a897be2c",
"assets/pateh_assets/images/airline_icons/SunCountry.png": "61030509f56951fe988bc64512dba556",
"assets/pateh_assets/images/airline_icons/SunExpress.png": "321055bb20f5c2dd335a650d85e105cb",
"assets/pateh_assets/images/airline_icons/SwissInternationalAirLines.png": "2e84b7da5ac41d79c161311baecea9c0",
"assets/pateh_assets/images/airline_icons/taban.png": "cb942aef56b0fa3e11bffaa290e34bf2",
"assets/pateh_assets/images/airline_icons/TabanAirlineLogo.png": "c91153bf4e4080010b917005b8f382b6",
"assets/pateh_assets/images/airline_icons/taftan.png": "d7c6b80236395d7747a238fea690a229",
"assets/pateh_assets/images/airline_icons/TaftanAirlineLogo.png": "476a5f1de99c545f14bb54d76519ba02",
"assets/pateh_assets/images/airline_icons/tailwind_airlines.png": "4801d0ca29c00f56d63309aa278428fc",
"assets/pateh_assets/images/airline_icons/TAJIKAIR(7J).png": "0380e0edc3ec6275679b06370925466d",
"assets/pateh_assets/images/airline_icons/Tanzania.png": "941043791f1cd84251f0eaf3876d419a",
"assets/pateh_assets/images/airline_icons/TAPPortugal.png": "d60b31d6c13eb3325021b4699113b357",
"assets/pateh_assets/images/airline_icons/TarcoAir.png": "3237b48dfe4a0e10a5dce9227c6c3db6",
"assets/pateh_assets/images/airline_icons/Tarom.png": "ee6e54294859430f3db4bd788bddf65e",
"assets/pateh_assets/images/airline_icons/tbm150-150.png": "052ba727168c97d00453e3487afd7435",
"assets/pateh_assets/images/airline_icons/tbz150-150.png": "8a92a3fcebf62b9c7fdb2b9e774695d7",
"assets/pateh_assets/images/airline_icons/ThaiAirwaysInternational.png": "438a3a9efca536379574be8a84ed46dd",
"assets/pateh_assets/images/airline_icons/ThaiLionAir.png": "d3743ff6684743bd3371f499c63a892a",
"assets/pateh_assets/images/airline_icons/Thalys.png": "f7405852f499e56540b3b26bdc6e4ba7",
"assets/pateh_assets/images/airline_icons/TiaraAir.png": "f94c0a7e95940e95cc47637645cbe404",
"assets/pateh_assets/images/airline_icons/TigerairPhilippines.png": "94cf5d1e32a9fca55cade536bbe37f2e",
"assets/pateh_assets/images/airline_icons/TNTAirways.png": "ada843ecc0aeb284baca307ed13e4841",
"assets/pateh_assets/images/airline_icons/Transat.png": "465e54f70fe29052ddfd573cedffb4e4",
"assets/pateh_assets/images/airline_icons/TransaviaFrance.png": "04571d2f54552a6959bf51dc169840f8",
"assets/pateh_assets/images/airline_icons/TropicOceanAirways(TI).png": "0236eff64b61502df0b0e8211ca01519",
"assets/pateh_assets/images/airline_icons/TUIflyNordic.png": "b39673d7e0f11be566304fba6d2a54b6",
"assets/pateh_assets/images/airline_icons/Tunisair.png": "5feefd7b47ea33d4463539bf0cefb4f6",
"assets/pateh_assets/images/airline_icons/TurkishAirlines(TK).png": "c300a73e0b810ec9294eb74b90d95b73",
"assets/pateh_assets/images/airline_icons/Turkmenistan.png": "229e8b8f38538b76d6dc3824651b6742",
"assets/pateh_assets/images/airline_icons/UkraineInternationaAirlines(PS).png": "31fe3f9a92250de556296930e5b66023",
"assets/pateh_assets/images/airline_icons/Uni.png": "f73e35e1765de2f772a4f2c6e0eec173",
"assets/pateh_assets/images/airline_icons/UnitedAirlines.png": "88bad505ac073f0014e2545d68b474b6",
"assets/pateh_assets/images/airline_icons/UnitedParcelService.png": "109fa2aaba91803f88a0a616535d0f09",
"assets/pateh_assets/images/airline_icons/USAirways.png": "cd567fc83d273b09587a96ffc8b1ce04",
"assets/pateh_assets/images/airline_icons/UzbekistanAirways.png": "d418129523dbbf9d30b810e6f3a23b81",
"assets/pateh_assets/images/airline_icons/varesh.png": "44bd2da28e56460b61d8241453cc13e7",
"assets/pateh_assets/images/airline_icons/VareshAirlineLogo.png": "3122b3b49ed0796029c6e87bd5a9b98e",
"assets/pateh_assets/images/airline_icons/ViaRailCanada.png": "14f0b197f48eb20714ca0c739c04c660",
"assets/pateh_assets/images/airline_icons/VietnamAirlines.png": "4cb05bbaab6879bb3553d7aa19efd082",
"assets/pateh_assets/images/airline_icons/VirginAtlanticAirways.png": "92ab534e50dfddb13e7fc239d1ae0211",
"assets/pateh_assets/images/airline_icons/Volotea.png": "f9e1d6925dcbc200eab7721c6da57038",
"assets/pateh_assets/images/airline_icons/vrh150-150.png": "2e3cc59912a637a0897f78d21493b7c9",
"assets/pateh_assets/images/airline_icons/Vueling.png": "ce9c15f6191790eaca42094788a2eee0",
"assets/pateh_assets/images/airline_icons/WelcomeAir.png": "dde424e713966f38ab1e6a0e7c015482",
"assets/pateh_assets/images/airline_icons/WestJet.png": "edba6f34d5d92f56d61c08ccc99b2f02",
"assets/pateh_assets/images/airline_icons/Wizz.png": "6033a70a41a27459960d398c5a4eb5a5",
"assets/pateh_assets/images/airline_icons/XiamenAirlines.png": "b40d6f3292759e135455cb10a4b16013",
"assets/pateh_assets/images/airline_icons/YazdAirways.png": "f3d24eba3b37fbae2511f3f642db1ab3",
"assets/pateh_assets/images/airline_icons/Yeti.png": "d5676e874336f832d4ab71086dd49fbc",
"assets/pateh_assets/images/airline_icons/YuteAirAlaska.png": "947f8dd3c2d718aa198e4c22548b36e9",
"assets/pateh_assets/images/airline_icons/zagros.png": "77f30e1665776e0c885682d8e314810d",
"assets/pateh_assets/images/airline_icons/ZagrosAirline.png": "16f564b523aec77ab87bf950f4179da9",
"assets/pateh_assets/images/airline_icons/Zimbabwe.png": "06f3f73d0f2efef65cea432e66a92cba",
"assets/pateh_assets/images/svgs/ai_character.svg": "9e6a15e6669b549be3955244f595f736",
"assets/pateh_assets/images/svgs/ai_star.svg": "b0cfbdd8dac15f4ee3ead2ca70272900",
"assets/pateh_assets/images/svgs/avatar_ring.svg": "6bfa6cb391e4033faa02f966b769b859",
"assets/pateh_assets/images/svgs/dark_bus_ticket_success.svg": "9b50106031b8e4f62e82ed69cd87724b",
"assets/pateh_assets/images/svgs/dark_flight_ticket_success.svg": "1f045a61e4d9e547a0c23845bcf8b70f",
"assets/pateh_assets/images/svgs/dark_ticket_fail.svg": "33c10165eae8d09670ae539b2d29bf12",
"assets/pateh_assets/images/svgs/empty_list_passenger.svg": "7f4bf2239f10f01a1643fb517188c2ff",
"assets/pateh_assets/images/svgs/iranicard.svg": "259f2eb010a8c920f295e88a13272d5f",
"assets/pateh_assets/images/svgs/light_bus_ticket_success.svg": "6ca22cc141480de9f15db181847d812b",
"assets/pateh_assets/images/svgs/light_flight_ticket_success.svg": "5e22e17767cc217826705d37c453efdc",
"assets/pateh_assets/images/svgs/light_ticket_fail.svg": "8e8a8a53d2b51fff9af4fab78c424350",
"assets/pateh_assets/images/svgs/pateh.svg": "b099e6d84425677b8baea816d00a7f82",
"assets/pateh_assets/images/svgs/pateh_name.svg": "8e3614363d3a6357d5035f025fea39ab",
"assets/pateh_assets/images/svgs/profile_avatar.svg": "e97e65d913593d504186453cb3abe39d",
"assets/pateh_assets/images/weather/clear-day.png": "f8c51965dda5de4b42bf4390e9ff64eb",
"assets/pateh_assets/images/weather/clear-night.png": "3810d1191230f994f0a290b63dcd86f6",
"assets/pateh_assets/images/weather/cloudy.png": "8ea16a0c352cbd7ee2e955c6876516a1",
"assets/pateh_assets/images/weather/fog.png": "8e9a34b77b1981704b7134cabf86b1fe",
"assets/pateh_assets/images/weather/hail.png": "2cde678a2c491952d9e3f3ee6bbec352",
"assets/pateh_assets/images/weather/partly-cloudy-day.png": "e7d2f4d5b9c1676e352f162cccdf7ad3",
"assets/pateh_assets/images/weather/partly-cloudy-night.png": "ba5a87c369b4bb53f5f27eca521461ab",
"assets/pateh_assets/images/weather/rain-snow-showers-day.png": "190379c73737bbb06bc4041d62628908",
"assets/pateh_assets/images/weather/rain-snow-showers-night.png": "946cbf528d4a6a24b1459398def8c75d",
"assets/pateh_assets/images/weather/rain-snow.png": "bd0328efdc861c6153e004e8c751a4f9",
"assets/pateh_assets/images/weather/rain.png": "9e06de898b60daaec69e8a6aaef67aba",
"assets/pateh_assets/images/weather/showers-day.png": "a0f681956aca495c0076bae080d0029e",
"assets/pateh_assets/images/weather/showers-night.png": "c8be175a538c31f44c547a83c3777221",
"assets/pateh_assets/images/weather/sleet.png": "5d8c6b2541de541e06a29ebaf755a116",
"assets/pateh_assets/images/weather/snow-showers-day.png": "6574e3ac9ecc96b32c97db44c58c6efa",
"assets/pateh_assets/images/weather/snow-showers-night.png": "cd8f126cf6f4db11308b6c267a750565",
"assets/pateh_assets/images/weather/snow.png": "a1416d7d2dc3f748a596295a9d10c1b2",
"assets/pateh_assets/images/weather/thunder-rain.png": "7c8c803f176b0d09ce6453194b3922f2",
"assets/pateh_assets/images/weather/thunder-showers-day.png": "524eb0e59e01e641b43413da38ec71c7",
"assets/pateh_assets/images/weather/thunder-showers-night.png": "c6d0f49366b1d17553d52f5a43adae74",
"assets/pateh_assets/images/weather/thunder.png": "e7ab8abd6d11fa25360f1dce5ada5e70",
"assets/pateh_assets/images/weather/wind.png": "a01fa76412f2c917fca5da61327adc2c",
"assets/pubspec.yaml": "ed12c927ff0d8d8686152d91a8b4d6e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "1a25d97f54f92d7b09943ad18b425163",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "c7f6b430db57a4fadcdff157c3452bc4",
"fonts/Estedad-Medium.ttf": "a7b1473e887fb4a9adf676ab5b185093",
"icons/bazaar.png": "ac8efd1a434e6142eafbf0f9dc917f39",
"icons/google-play.png": "d0ec94ad987600ad49222979e6853474",
"icons/Icon-192.png": "a6be17a814215d094788718b440ed822",
"icons/Icon-512.png": "dd7a1cf2845bb801c96b21ac9076d14f",
"icons/Icon-maskable-192.png": "a6be17a814215d094788718b440ed822",
"icons/Icon-maskable-512.png": "dd7a1cf2845bb801c96b21ac9076d14f",
"icons/icsearchlogo.svg": "7666e069326a44ba691f7a846ed3dd82",
"icons/myket.png": "66b72a177430957c2ea4f16836baf877",
"index.html": "0338a0c30137ce4fbe5c07a8559d9e68",
"/": "0338a0c30137ce4fbe5c07a8559d9e68",
"main.dart.js": "20f4417909076c3c1bf5072c56bef226",
"manifest.json": "8f42c440d073c9acebf41b3ddf733547",
"version.json": "8455b01318771d569b218bbf0dbb11ec"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
