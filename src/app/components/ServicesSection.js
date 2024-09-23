import {
  DnsOutlined,
  StorageOutlined,
  CloudOutlined,
  EngineeringOutlined,
  SecurityOutlined,
  InventoryOutlined,
} from "@mui/icons-material";

import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  return (
    <section className="services-section">
      <h2 className="services-title">Our Services</h2>
      <div className="card-container">
        <ServiceCard
          title="Core IT Infra Services"
          description="Our Infrastructure Services provide a solid foundation for your IT environment, ensuring seamless operations and scalability."
          IconComponent={DnsOutlined}
        />
        <ServiceCard
          title="Data Center Management"
          description="Our Data Center Services optimize your IT operations with cutting-edge solutions designed for reliability and efficiency."
          IconComponent={StorageOutlined}
        />
        <ServiceCard
          title="Cloud Solutions"
          description="Leverage the full potential of the cloud with our comprehensive Cloud Services."
          IconComponent={CloudOutlined}
        />
        <ServiceCard
          title="IT Consulting Services"
          description="Our Consulting Services provide strategic guidance and technical expertise to help you achieve your IT goals."
          IconComponent={EngineeringOutlined}
        />
        <ServiceCard
          title="Advanced Cyber Defence Services"
          description="In a world of ever-evolving cyber threats, our Cybersecurity Services provide comprehensive protection for your business."
          IconComponent={SecurityOutlined}
        />
        <ServiceCard
          title="IT Procurement Services"
          description="Optimize your technology investments with our IT Procurement Services."
          IconComponent={InventoryOutlined}
        />
      </div>
    </section>
  );
}
