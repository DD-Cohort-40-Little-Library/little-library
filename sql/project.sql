DROP TABLE IF EXISTS check_in;
DROP TABLE IF EXISTS event;
DROP TABLE IF EXISTS library;
DROP TABLE IF EXISTS profile;

CREATE TABLE IF NOT EXISTS profile (
                                profile_id UUID NOT NULL,
                                profile_activation_token UUID,
                                profile_avatar_url VARCHAR(128),
                                profile_email  VARCHAR(132) NOT NULL UNIQUE,
                                profile_first_name VARCHAR(32) NOT NULL,
                                profile_hash CHAR(97) NOT NULL,
                                profile_last_name VARCHAR(32) NOT NULL,
                                profile_name VARCHAR(128) NOT NULL UNIQUE,
                                PRIMARY KEY (profile_id)
);

CREATE TABLE IF NOT EXISTS library (
                                library_id UUID NOT NULL,
                                library_profile_id UUID NOT NULL,
                                library_address VARCHAR(258) NOT NULL,
                                library_description VARCHAR(256),
                                library_event_opt_in BOOLEAN NOT NULL,
                                library_lat CHAR(9),
                                library_lng CHAR(9),
                                library_name VARCHAR(128) NOT NULL,
                                library_specialization INTEGER,
                                library_type VARCHAR(32) NOT NULL,
                                FOREIGN KEY (library_profile_id) REFERENCES profile(profile_id),
                                PRIMARY KEY (library_id)
);
CREATE INDEX ON library(library_profile_id);

CREATE TABLE IF NOT EXISTS event (
                                event_id UUID NOT NULL,
                                event_library_event_opt_in BOOLEAN NOT NULL,
                                event_library_id UUID NOT NULL,
                                event_profile_id UUID NOT NULL,
                                event_date TIMESTAMPTZ NOT NULL,
                                event_description VARCHAR(256),
                                event_end TIMESTAMPTZ NOT NULL,
                                event_start TIMESTAMPTZ NOT NULL,
                                event_title VARCHAR(128) NOT NULL,
                                event_type VARCHAR(128),
--                                 FOREIGN KEY (event_library_event_opt_in) REFERENCES library(library_event_opt_in),
                                FOREIGN KEY (event_library_id) REFERENCES library(library_id),
                                FOREIGN KEY (event_profile_id) REFERENCES profile(profile_id),
                                PRIMARY KEY (event_id)
);
CREATE INDEX ON event(event_library_event_opt_in);
CREATE INDEX ON event(event_library_id);
CREATE INDEX ON event(event_profile_id);

CREATE TABLE IF NOT EXISTS check_in (
                                check_in_id UUID NOT NULL,
                                check_in_library_id UUID NOT NULL,
                                check_in_profile_id UUID NOT NULL,
                                check_in_comment VARCHAR(256),
                                check_in_follow_library BOOLEAN,
                                check_in_photo_name VARCHAR(128),
                                check_in_Photo_url VARCHAR(256),
                                check_in_date TIMESTAMPTZ NOT NULL,
                                check_in_report BOOLEAN,
                                FOREIGN KEY (check_in_library_id) REFERENCES library(library_id),
                                FOREIGN KEY (check_in_profile_id) REFERENCES profile(profile_id),
                                PRIMARY KEY (check_in_library_id, check_in_profile_id)
);
CREATE INDEX ON check_in(check_in_library_id);
CREATE INDEX ON check_in(check_in_profile_id);

