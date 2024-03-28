CREATE TABLE Pricing (
    id SERIAL PRIMARY KEY,
    organization_id INTEGER REFERENCES Organization(id),
    item_id INTEGER REFERENCES Item(id),
    zone VARCHAR(50) NOT NULL,
    base_distance INTEGER NOT NULL,
    base_price DECIMAL(10, 2) NOT NULL,
    per_km_price DECIMAL(10, 2) NOT NULL,
    CONSTRAINT unique_pricing UNIQUE (organization_id, item_id, zone)
);