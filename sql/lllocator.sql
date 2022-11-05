DROP TABLE IF EXISTS check_in;
DROP TABLE IF EXISTS event;
DROP TABLE IF EXISTS library;
DROP TABLE IF EXISTS user;

CREATE TABLE IF NOT EXISTS user (
                                user_id UUID NOT NULL
                                user_activation_token UUID NOT NULL
                                user_avatar_url VARCHAR(128)
                                user_email NOT NULL
                                user_first_name VARCHAR(32)
                                user_hash NOT NULL char(97)
                                user_last_name VARCHAR(32)
                                user_name CHAR(64)
                                user_phone  VARCHAR(24)
)

CREATE TABLE IF NOT EXISTS library (
                                library_id UUID NOT NULL
                                library_user_id UUID NOT NULL
                                library_address NOT NULL
                                library_charter  VARCHAR(16)
                                library_description VARCHAR(256)
                                library_eventOptIn ******************slider?????******************
                                library_lat CHAR(9)
                                library_lng CHAR(9)
                                library_specialization ******************checkboxType?????******************
                                library_type NOT NULL
)

CREATE TABLE IF NOT EXISTS event (
                                event_id UUID NOT NULL
                                event_library_id UUID NOT NULL
                                event_user_id UUID NOT NULL
                                event_date NOT NULL DATE
                                event_description VARCHAR(256)
                                event_end NOT NULL
                                event_start NOT NULL
                                event_title NOT NULL
                                event_type
)

CREATE TABLE IF NOT EXISTS check_in (
                                check_in_id UUID NOT NULL
                                check_in_library_id UUID NOT NULL
                                check_in_user_id UUID NOT NULL
                                check_in_comment VARCHAR(256)???????????????????????
                                check_in_follow_library
                                check_in_photo_name
                                check_in_Photo_url
                                check_in_date NOT NULL DATE
                                check_in_report VARCHAR(256)??????????????????
)

************************************************
    FINISH LABELS OF TYPES
    PK AND FK - ENTER
    INDEX - ENTER